import { getJobs, getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";

const benefits = {
  en: [
    {
      title: "Innovative projects",
      desc: "Work on top projects for clients across multiple industries."
    },
    {
      title: "Professional development",
      desc: "Training programs and career growth opportunities."
    },
    {
      title: "Friendly team",
      desc: "Organizational culture based on collaboration and respect."
    },
    {
      title: "Competitive package",
      desc: "Attractive salary, bonuses, and additional benefits."
    }
  ],
  ro: [
    {
      title: "Proiecte inovatoare",
      desc: "Lucrează la proiecte de top pentru clienți din diverse industrii."
    },
    {
      title: "Dezvoltare profesională",
      desc: "Programe de training și oportunități de avansare în carieră."
    },
    {
      title: "Echipă prietenoasă",
      desc: "Cultură organizațională bazată pe colaborare și respect."
    },
    {
      title: "Pachet competitiv",
      desc: "Salariu atractiv, bonusuri și beneficii suplimentare."
    }
  ]
};

const labels = {
  en: {
    why: "Why RADCOM?",
    jobs: "Open positions",
    empty: "No open positions at the moment. Send your CV to",
    email: "careers@radcom.ro"
  },
  ro: {
    why: "De ce RADCOM?",
    jobs: "Poziții disponibile",
    empty: "Nu există poziții disponibile momentan. Trimite CV-ul tău la",
    email: "cariere@radcom.ro"
  }
};

export default async function CarierePage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const fallback = getPageFallback("cariere", locale);
  const page = (await getPage("cariere", locale)) || fallback;
  const jobs = await getJobs(locale);
  const t = labels[locale];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{t.why}</h2>
          <p className="section-lead">{page.body}</p>
          <div className="feature-grid">
            {benefits[locale].map((benefit) => (
              <article className="feature-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{t.jobs}</h2>
          {jobs.length ? (
            <div className="feature-grid">
              {jobs.map((job) => (
                <article className="feature-card" key={job.id}>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <p>
                    {job.department} · {job.location} · {job.type}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="card">
              <p>
                {t.empty}
                <a href={`mailto:${t.email}`}> {t.email}</a>.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
