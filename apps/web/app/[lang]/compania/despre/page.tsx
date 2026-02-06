import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { SubNav } from "../../../components/SubNav";
import { companyContent } from "../../../lib/company-history";

const labels = {
  en: {
    overview: "Company profile",
    history: "History"
  },
  ro: {
    overview: "Profilul companiei",
    history: "Istoric"
  }
};

export default async function DesprePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-despre", locale);
  const page = (await getPage("compania-despre", locale)) || fallback;
  const t = labels[locale] || labels.ro;
  const content = companyContent[locale] || companyContent.ro;
  const subnavItems = [
    { label: locale === "ro" ? "Despre" : "About", href: "/compania/despre" },
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

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{t.overview}</h2>
          {content.overview.map((paragraph) => (
            <p className="section-lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.history}</h2>
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
