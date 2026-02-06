import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { SubNav } from "../../components/SubNav";
import { companyContent } from "../../lib/company-history";

const labels = {
  en: {
    about: "About us",
    history: "History",
    certifications: "Certifications",
    contact: "Quick contact",
    explore: "Explore",
    aboutCard: "About",
    teamCard: "Team",
    certificationsCard: "Certifications",
    aboutDesc: "RADCOM history and values.",
    teamDesc: "The specialists delivering our projects.",
    certDesc: "ISO standards and strategic partnerships."
  },
  ro: {
    about: "Despre noi",
    history: "Istoric",
    certifications: "Certificări",
    contact: "Contact rapid",
    explore: "Explorează",
    aboutCard: "Despre",
    teamCard: "Echipă",
    certificationsCard: "Certificări",
    aboutDesc: "Istoria și valorile RADCOM.",
    teamDesc: "Specialiștii care livrează proiectele.",
    certDesc: "ISO și parteneriate strategice."
  }
};

const paragraphize = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

export default async function CompaniaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania", locale);
  const page = (await getPage("compania", locale)) || fallback;
  const t = labels[locale];
  const content = companyContent[locale] || companyContent.ro;
  const subnavItems = [
    { label: t.aboutCard, href: "/compania/despre" },
    { label: t.teamCard, href: "/compania/echipa" },
    { label: t.certificationsCard, href: "/compania/certificari" }
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
          <h2 className="section-title">{t.about}</h2>
          {(content.overview.length ? content.overview : paragraphize(page.body)).map((paragraph) => (
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

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{t.certifications}</h2>
          <div className="grid grid-3">
            {content.certifications.map((certification) => (
              <div className="card" key={certification}>
                <p>{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.contact}</h2>
          <div className="grid grid-3">
            <div className="card">
              <p>{content.contact.address}</p>
              <p>{content.contact.phone}</p>
              <p>{content.contact.email}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.explore}</h2>
          <div className="grid grid-3">
            <a className="card" href={`/${locale}/compania/despre`}>
              <h3>{t.aboutCard}</h3>
              <p>{t.aboutDesc}</p>
            </a>
            <a className="card" href={`/${locale}/compania/echipa`}>
              <h3>{t.teamCard}</h3>
              <p>{t.teamDesc}</p>
            </a>
            <a className="card" href={`/${locale}/compania/certificari`}>
              <h3>{t.certificationsCard}</h3>
              <p>{t.certDesc}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
