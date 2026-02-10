import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";
import { SubNav } from "../../components/SubNav";

const labels = {
  en: {
    explore: "Explore",
    aboutCard: "History",
    teamCard: "Team",
    certificationsCard: "Certifications",
    aboutDesc: "RADCOM history and milestones.",
    teamDesc: "The specialists delivering our projects.",
    certDesc: "ISO standards and strategic partnerships."
  },
  ro: {
    explore: "Explorează",
    aboutCard: "Istoric",
    teamCard: "Echipă",
    certificationsCard: "Certificări",
    aboutDesc: "Istoria și reperele RADCOM.",
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
  const subnavItems = [
    { label: t.aboutCard, href: "/compania/istoric" },
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
        <div className="container">{renderBody(page.body)}</div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.explore}</h2>
          <div className="grid grid-3">
            <a className="card" href={`/${locale}/compania/istoric`}>
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
