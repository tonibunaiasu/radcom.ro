import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false
});

const WP_BASE = "https://www.radcom.ro/new/wp-json/wp/v2";

const decodeEntities = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&#038;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#8222;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8217;/g, "'");

const htmlToText = (html) => {
  if (!html) return "";
  let text = html
    .replace(/<\/?(script|style)[^>]*>/gi, " ")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<\/?p[^>]*>/gi, "\n")
    .replace(/<\/?h\d[^>]*>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/?li>/gi, "")
    .replace(/<\/?ul[^>]*>/gi, "\n")
    .replace(/<\/?ol[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  text = decodeEntities(text);
  text = text.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n");
  return text.trim();
};

const extractListItems = (html, limit = 8) => {
  const items = [];
  if (!html) return items;
  const matches = html.match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
  for (const match of matches) {
    const txt = htmlToText(match).replace(/^[-•]\s*/, "").trim();
    if (txt) items.push(txt);
    if (items.length >= limit) break;
  }
  return items;
};

async function fetchWpPages() {
  const res = await fetch(`${WP_BASE}/pages?per_page=100`);
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  return res.json();
}

const pageSlugMap = {
  compania: "compania",
  cariere: "cariere",
  "premii-distinctii-certificari": "premii",
  testimoniale: "recomandari",
  stiri: "articole",
  "sa-vorbim": "contact",
  "politica-cookie": "politica-cookie",
  confidentialitate: "politica-confidentialitate",
  servicii: "servicii"
};

async function upsertPage(slug, title, summary, body) {
  await client.createOrReplace({
    _id: `page-${slug}`,
    _type: "page",
    title: { ro: title, en: "" },
    slug: { _type: "slug", current: slug },
    summary: { ro: summary, en: "" },
    body: { ro: body, en: "" }
  });
}

async function upsertService(slug, title, subtitle, description, features) {
  await client.createOrReplace({
    _id: slug,
    _type: "service",
    title: { ro: title, en: title },
    subtitle: { ro: subtitle, en: subtitle },
    description: { ro: description, en: description },
    features: features.map((item) => ({ ro: item, en: item })),
    slug: { _type: "slug", current: slug }
  });
}

async function run() {
  const pages = await fetchWpPages();

  for (const page of pages) {
    const wpSlug = page.slug;
    const mappedSlug = pageSlugMap[wpSlug];
    if (!mappedSlug) continue;

    const title = decodeEntities(page.title?.rendered || "");
    const bodyText = htmlToText(page.content?.rendered || "");
    const summary = bodyText.split("\n").find((line) => line.trim()) || "";

    await upsertPage(mappedSlug, title, summary, bodyText);

    if (["ifleet", "optifare", "exact"].includes(wpSlug)) {
      const features = extractListItems(page.content?.rendered || "");
      await upsertService(
        wpSlug,
        title,
        decodeEntities(page.title?.rendered || ""),
        summary,
        features.length ? features : ["Soluție integrată hardware + software"]
      );
    }
  }

  console.log("WP import complete");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
