import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";

const statsCopy = {
  en: [
    { value: "15+", label: "Years of experience" },
    { value: "500+", label: "Completed projects" },
    { value: "100+", label: "Satisfied clients" }
  ],
  ro: [
    { value: "15+", label: "Ani de experiență" },
    { value: "500+", label: "Proiecte finalizate" },
    { value: "100+", label: "Clienți mulțumiți" }
  ]
};

const labels = {
  en: {
    about: "About us",
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

export default async function CompaniaPage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const fallback = getPageFallback("compania", locale);
  const page = (await getPage("compania", locale)) || fallback;
  const stats = statsCopy[locale];
  const t = labels[locale];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{t.about}</h2>
          {paragraphize(page.body).map((paragraph) => (
            <p className="section-lead" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="grid">
            {stats.map((stat) => (
              <div className="card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.explore}</h2>
          <div className="grid">
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
