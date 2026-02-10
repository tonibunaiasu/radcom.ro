import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";

const editorialCopy = {
  en: {
    meta: "Case study",
    lead: "A clear look at delivery, results, and impact.",
    highlights: [
      {
        title: "Unified delivery",
        desc: "Hardware + software shipped as one integrated system."
      },
      {
        title: "Operational outcomes",
        desc: "Better punctuality, visibility, and passenger updates."
      },
      {
        title: "Scalable rollout",
        desc: "Designed for growth across fleets and depots."
      }
    ],
    sideTitle: "Project lens",
    sideItems: ["Operator needs", "Passenger impact", "Technology stack", "Results"]
  },
  ro: {
    meta: "Studiu de caz",
    lead: "O privire clară asupra livrării, rezultatelor și impactului.",
    highlights: [
      {
        title: "Livrare unificată",
        desc: "Hardware + software livrate ca un singur sistem."
      },
      {
        title: "Rezultate operaționale",
        desc: "Punctualitate mai bună și informare consecventă."
      },
      {
        title: "Implementare scalabilă",
        desc: "Gândită pentru extindere pe flote și depouri."
      }
    ],
    sideTitle: "Lens proiect",
    sideItems: ["Nevoi operator", "Impact pasageri", "Stack tehnologic", "Rezultate"]
  }
};

export default async function StudiiDeCazPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("studii-de-caz", locale);
  const page = (await getPage("studii-de-caz", locale)) || fallback;
  const t = editorialCopy[locale];

  return (
    <main>
      <section className="section-block primary hero-banner">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container editorial-grid">
          <div>
            <div className="editorial-meta">
              {t.meta}
              <span />
              {t.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {page.summary}
            </h2>
            <div className="editorial-highlights">
              {t.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
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
        <div className="container" style={{ marginTop: 32 }}>
          {renderBody(page.body)}
        </div>
      </section>
    </main>
  );
}
