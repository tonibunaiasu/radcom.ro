import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";

const editorialCopy = {
  en: {
    meta: "Recommendations",
    lead: "What partners value in working with RADCOM.",
    highlights: [
      {
        title: "Operational trust",
        desc: "Reliability matters most for transport operators."
      },
      {
        title: "Clear collaboration",
        desc: "Transparent scope, realistic timelines."
      },
      {
        title: "Long-term impact",
        desc: "Solutions designed to grow with the city."
      }
    ],
    sideTitle: "Focus areas",
    sideItems: ["Reliability", "Integration", "Support", "Outcomes"]
  },
  ro: {
    meta: "Recomandări",
    lead: "Ce apreciază partenerii în colaborarea cu RADCOM.",
    highlights: [
      {
        title: "Încredere operațională",
        desc: "Fiabilitatea contează cel mai mult pentru operatori."
      },
      {
        title: "Colaborare clară",
        desc: "Scop transparent, termene realiste."
      },
      {
        title: "Impact pe termen lung",
        desc: "Soluții care cresc odată cu orașul."
      }
    ],
    sideTitle: "Zone cheie",
    sideItems: ["Fiabilitate", "Integrare", "Suport", "Rezultate"]
  }
};

export default async function RecomandariPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("recomandari", locale);
  const page = (await getPage("recomandari", locale)) || fallback;
  const e = editorialCopy[locale];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container editorial-grid" style={{ marginBottom: 32 }}>
          <div>
            <div className="editorial-meta">
              {e.meta}
              <span />
              {e.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {page.summary}
            </h2>
            <div className="editorial-highlights">
              {e.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="editorial-side">
            <div className="editorial-card">
              <h4>{e.sideTitle}</h4>
              <ul>
                {e.sideItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="container">{renderBody(page.body)}</div>
      </section>
    </main>
  );
}
