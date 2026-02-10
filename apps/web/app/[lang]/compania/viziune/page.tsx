import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";
import { companyBreadcrumbs, companyLinks } from "../../../lib/company-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";

const copy = {
  en: {
    meta: "Vision",
    lead: "Where we are heading next.",
    highlights: [
      {
        title: "Connected cities",
        desc: "Mobility systems that share data, not silos."
      },
      {
        title: "Reliable by design",
        desc: "Predictable transport that earns daily trust."
      },
      {
        title: "Human scale",
        desc: "Technology that feels intuitive for passengers."
      }
    ],
    sideTitle: "Focus areas",
    sideItems: ["Integration", "Predictability", "Safety", "Scalability"]
  },
  ro: {
    meta: "Viziune",
    lead: "Unde ne îndreptăm mai departe.",
    highlights: [
      {
        title: "Orașe conectate",
        desc: "Sisteme de mobilitate care schimbă date, nu rămân în silozuri."
      },
      {
        title: "Fiabilitate by design",
        desc: "Transport predictibil, care câștigă încredere zilnic."
      },
      {
        title: "Dimensiune umană",
        desc: "Tehnologie intuitivă pentru pasageri."
      }
    ],
    sideTitle: "Direcții cheie",
    sideItems: ["Integrare", "Predictibilitate", "Siguranță", "Scalare"]
  }
};

const splitBlocks = (text?: string) =>
  (text || "")
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

const extractQuote = (blocks: string[]) => {
  const index = blocks.findIndex((block) => block.startsWith(">"));
  if (index === -1) return { quote: "", blocks };
  const [quoteBlock] = blocks.splice(index, 1);
  return { quote: quoteBlock.replace(/^>\s*/, ""), blocks };
};

export default async function ViziunePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-viziune", locale);
  const page = (await getPage("compania-viziune", locale)) || fallback;
  const t = copy[locale];
  const bodyBlocks = splitBlocks(page.body);
  const { quote, blocks } = extractQuote(bodyBlocks);
  const currentPath = "/compania/viziune";
  const breadcrumbs = companyBreadcrumbs(locale, locale === "ro" ? "Viziune" : "Vision");
  const quickLinks = companyLinks[locale].filter((item) => item.href !== currentPath);
  return (
    <main>
      <section
        className="section-block primary hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.85), rgba(15,33,58,0.45)), url(/hero/company.webp)"
        }}
      >
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>
      <section className="section-block">
        <div className="container">
          <div className="inline-links">
            {quickLinks.map((item) => (
              <a key={item.href} href={`/${locale}${item.href}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="editorial-grid">
          <div>
            <div className="editorial-meta">
              {t.meta}
              <span />
              {t.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {page.summary}
            </h2>
            {quote ? <blockquote className="editorial-quote">{quote}</blockquote> : null}
            <div className="editorial-highlights">
              {t.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>{renderBody(blocks.join("\n\n"))}</div>
          </div>
          <aside className="editorial-side">
            <div className="editorial-card">
              <h4>{t.sideTitle}</h4>
              <ul>
                {t.sideItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        </div>
      </section>
    </main>
  );
}
