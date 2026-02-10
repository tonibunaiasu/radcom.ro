import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { SubNav } from "../../../components/SubNav";
import { companyContent } from "../../../lib/company-history";

const labels = {
  en: {
    meta: "History",
    lead: "Milestones that shaped RADCOM.",
    highlights: [
      {
        title: "Built to scale",
        desc: "From first contracts to nationwide deployments."
      },
      {
        title: "Trusted partner",
        desc: "Long-term collaborations with operators and cities."
      },
      {
        title: "Continuous innovation",
        desc: "Evolving with transport technology cycles."
      }
    ],
    sideTitle: "Milestone lenses",
    sideItems: ["Operators", "Passengers", "Infrastructure", "Data"]
  },
  ro: {
    meta: "Istoric",
    lead: "Reperele care au format RADCOM.",
    highlights: [
      {
        title: "Construit pentru scalare",
        desc: "De la primele contracte la implementări naționale."
      },
      {
        title: "Partener de încredere",
        desc: "Colaborări pe termen lung cu operatori și orașe."
      },
      {
        title: "Inovație continuă",
        desc: "Evoluăm odată cu ciclurile tehnologice din transport."
      }
    ],
    sideTitle: "Repere cheie",
    sideItems: ["Operatori", "Pasageri", "Infrastructură", "Date"]
  }
};

export default async function IstoricPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-istoric", locale);
  const page = (await getPage("compania-istoric", locale)) || fallback;
  const t = labels[locale] || labels.ro;
  const content = companyContent[locale] || companyContent.ro;
  const subnavItems = [
    { label: locale === "ro" ? "Viziune" : "Vision", href: "/compania/viziune" },
    { label: locale === "ro" ? "Misiune" : "Mission", href: "/compania/misiune" },
    { label: locale === "ro" ? "Valori" : "Values", href: "/compania/valori" },
    { label: locale === "ro" ? "Istoric" : "History", href: "/compania/istoric" },
    { label: locale === "ro" ? "Echipă" : "Team", href: "/compania/echipa" },
    { label: locale === "ro" ? "Certificări" : "Certifications", href: "/compania/certificari" }
  ];

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
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>
      <SubNav items={subnavItems} />

      <section className="section-block alt">
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
          <div className="grid grid-3">
            {content.history.map((entry) => {
              const entryTextLength =
                entry.paragraphs.join(" ").length + (entry.bullets?.join(" ").length || 0);
              const isWide = entryTextLength > 280;

              return (
                <div className={`card ${isWide ? "card-wide" : ""}`} key={entry.year}>
                  <h3>{entry.year}</h3>
                  {entry.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {entry.bullets && (
                    <ul>
                      {entry.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
