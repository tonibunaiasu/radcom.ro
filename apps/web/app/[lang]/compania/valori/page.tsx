import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";
import { companyBreadcrumbs, companyLinks } from "../../../lib/company-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";

const copy = {
  en: {
    meta: "Values & Principles",
    lead: "The standards behind every decision.",
    highlights: [
      {
        title: "Interoperability",
        desc: "Systems that integrate and scale together."
      },
      {
        title: "Reliability",
        desc: "Stability over features, outcomes over noise."
      },
      {
        title: "Passenger-first",
        desc: "Real people shape every technical choice."
      }
    ],
    sideTitle: "Working principles",
    sideItems: [
      "We listen before we design",
      "Integration is the key",
      "Technical transparency",
      "Quality without compromise",
      "Continuous evolution"
    ]
  },
  ro: {
    meta: "Valori & Principii",
    lead: "Standardele din spatele fiecărei decizii.",
    highlights: [
      {
        title: "Interoperabilitate",
        desc: "Sisteme care se integrează și cresc împreună."
      },
      {
        title: "Fiabilitate",
        desc: "Stabilitate înainte de funcționalități."
      },
      {
        title: "Pasagerul în centru",
        desc: "Oamenii reali ghidează alegerile tehnice."
      }
    ],
    sideTitle: "Principii de lucru",
    sideItems: [
      "Ascultăm înainte să proiectăm",
      "Integrarea este cheia",
      "Transparență tehnică",
      "Calitate fără compromis",
      "Evoluție continuă"
    ]
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

export default async function ValoriPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-valori", locale);
  const page = (await getPage("compania-valori", locale)) || fallback;
  const t = copy[locale];
  const bodyBlocks = splitBlocks(page.body);
  const { quote, blocks } = extractQuote(bodyBlocks);
  const currentPath = "/compania/valori";
  const breadcrumbs = companyBreadcrumbs(locale, locale === "ro" ? "Valori" : "Values");
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
