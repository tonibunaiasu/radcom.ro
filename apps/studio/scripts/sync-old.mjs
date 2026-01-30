import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing SANITY_STUDIO_PROJECT_ID or SANITY_API_TOKEN");
  process.exit(1);
}

const readJson = (filePath) =>
  JSON.parse(fs.readFileSync(filePath, "utf8"));

const en = readJson(
  path.resolve(
    process.cwd(),
    "../web/app/lib/locales/en.json"
  )
);
const ro = readJson(
  path.resolve(
    process.cwd(),
    "../web/app/lib/locales/ro.json"
  )
);

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false
});

const buildHeroTitle = (locale) =>
  `${locale.hero.title} ${locale.hero.titleHighlight}`.trim();

const stats = [
  {
    value: ro.stats.top3,
    label: { ro: ro.stats.top3Description, en: en.stats.top3Description }
  },
  {
    value: ro.stats.completeServices,
    label: {
      ro: ro.stats.completeServicesDescription,
      en: en.stats.completeServicesDescription
    }
  },
  {
    value: ro.stats.perfectSolutions,
    label: {
      ro: ro.stats.perfectSolutionsDescription,
      en: en.stats.perfectSolutionsDescription
    }
  }
];

const advantages = [
  {
    title: { ro: ro.advantages.responsiveness.title, en: en.advantages.responsiveness.title },
    desc: { ro: ro.advantages.responsiveness.description, en: en.advantages.responsiveness.description }
  },
  {
    title: { ro: ro.advantages.customization.title, en: en.advantages.customization.title },
    desc: { ro: ro.advantages.customization.description, en: en.advantages.customization.description }
  },
  {
    title: { ro: ro.advantages.uiElements.title, en: en.advantages.uiElements.title },
    desc: { ro: ro.advantages.uiElements.description, en: en.advantages.uiElements.description }
  },
  {
    title: { ro: ro.advantages.cleanCode.title, en: en.advantages.cleanCode.title },
    desc: { ro: ro.advantages.cleanCode.description, en: en.advantages.cleanCode.description }
  }
];

const updateHome = async () => {
  const home = await client.fetch(`*[_type=="home"][0]{_id}`);
  if (!home?._id) {
    console.error("Home document not found.");
    return;
  }

  await client
    .patch(home._id)
    .set({
      hero: {
        title: { ro: buildHeroTitle(ro), en: buildHeroTitle(en) },
        subtitle: { ro: ro.hero.subtitle, en: en.hero.subtitle },
        ctaPrimary: { ro: ro.cta.contactUs, en: en.cta.contactUs },
        ctaSecondary: { ro: ro.cta.discoverMore, en: en.cta.discoverMore }
      },
      stats,
      advantages
    })
    .commit();
};

const serviceFeatureKeys = {
  ifleet: ["management", "counting", "monitoring", "tracking", "reporting", "cob"],
  optifare: ["mifare", "payment", "nfc", "receipts", "interface", "validators"],
  exact: ["planner", "displays", "led", "eta", "announcements", "connections"]
};

const updateService = async (slug) => {
  const doc = await client.fetch(
    `*[_type=="service" && slug.current==$slug][0]{_id}`,
    { slug }
  );
  if (!doc?._id) return;

  const base = ro.products[slug];
  const baseEn = en.products[slug];
  const keys = serviceFeatureKeys[slug];

  const features = keys.map((key) => ({
    ro: base.features[key],
    en: baseEn.features[key]
  }));

  await client
    .patch(doc._id)
    .set({
      title: { ro: base.title, en: baseEn.title },
      subtitle: { ro: base.subtitle, en: baseEn.subtitle },
      description: { ro: base.description, en: baseEn.description },
      features
    })
    .commit();
};

const updateSettings = async () => {
  const settings = await client.fetch(`*[_type=="settings"][0]{_id}`);
  if (!settings?._id) return;

  await client
    .patch(settings._id)
    .set({
      address: ro.footer.addressFull
    })
    .commit();
};

async function main() {
  await updateHome();
  await updateService("ifleet");
  await updateService("optifare");
  await updateService("exact");
  await updateSettings();
  console.log("Sanity content synced from radcom-old locales.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
