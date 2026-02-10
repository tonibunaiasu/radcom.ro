import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";

const editorialCopy = {
  en: {
    meta: "Awards",
    lead: "Recognition for meaningful transport innovation.",
    highlights: [
      {
        title: "Validated impact",
        desc: "Awards that signal measurable progress."
      },
      {
        title: "Industry trust",
        desc: "Recognition from peers and partners."
      },
      {
        title: "Execution quality",
        desc: "Consistent delivery across complex projects."
      }
    ],
    sideTitle: "Recognition pillars",
    sideItems: ["Innovation", "Quality", "Reliability", "People"]
  },
  ro: {
    meta: "Premii",
    lead: "Recunoaștere pentru inovație reală în transport.",
    highlights: [
      {
        title: "Impact validat",
        desc: "Premii care confirmă progresul măsurabil."
      },
      {
        title: "Încredere în industrie",
        desc: "Recunoaștere din partea partenerilor."
      },
      {
        title: "Calitate în execuție",
        desc: "Livrăm constant proiecte complexe."
      }
    ],
    sideTitle: "Pilonii recunoașterii",
    sideItems: ["Inovație", "Calitate", "Fiabilitate", "Oameni"]
  }
};

export default async function PremiiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("premii", locale);
  const page = (await getPage("premii", locale)) || fallback;
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
