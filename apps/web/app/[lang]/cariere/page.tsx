import { getJobs, getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { Award, Briefcase, Sparkles, GraduationCap, Users } from "lucide-react";

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
    email: "careers@radcom.ro",
    meta: "Careers",
    lead: "Work on mobility technology that matters.",
    highlights: [
      {
        title: "Mission-led work",
        desc: "Projects that directly improve how cities move."
      },
      {
        title: "Hands-on impact",
        desc: "From hardware to software, you ship real outcomes."
      },
      {
        title: "Growth mindset",
        desc: "Continuous learning built into every team."
      }
    ],
    sideTitle: "Roles we hire for",
    sideItems: ["Engineering", "Operations", "Support", "Project delivery"]
  },
  ro: {
    why: "De ce RADCOM?",
    jobs: "Poziții disponibile",
    empty: "Nu există poziții disponibile momentan. Trimite CV-ul tău la",
    email: "cariere@radcom.ro",
    meta: "Cariere",
    lead: "Lucrează la tehnologii de mobilitate care contează.",
    highlights: [
      {
        title: "Misiune clară",
        desc: "Proiecte care îmbunătățesc direct transportul urban."
      },
      {
        title: "Impact real",
        desc: "De la hardware la software, livrezi rezultate vizibile."
      },
      {
        title: "Mentalitate de creștere",
        desc: "Învățare continuă în fiecare echipă."
      }
    ],
    sideTitle: "Roluri căutate",
    sideItems: ["Inginerie", "Operațiuni", "Suport", "Livrare proiecte"]
  }
};

export default async function CarierePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("cariere", locale);
  const page = (await getPage("cariere", locale)) || fallback;
  const jobs = await getJobs(locale);
  const t = labels[locale];
  const benefitIcons = [
    <Sparkles key="sparkles" size={22} strokeWidth={1.6} />,
    <GraduationCap key="grad" size={22} strokeWidth={1.6} />,
    <Users key="users" size={22} strokeWidth={1.6} />,
    <Award key="award" size={22} strokeWidth={1.6} />
  ];

  return (
    <main>
      <section
        className="section-block primary hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.85), rgba(15,33,58,0.45)), url(/hero/careers.webp)"
        }}
      >
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container editorial-grid">
          <div>
            <div className="editorial-meta">
              {t.meta}
              <span />
              {t.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {t.why}
            </h2>
            <p className="section-lead">{page.body}</p>
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
          <div className="feature-grid">
            {benefits[locale].map((benefit, index) => (
              <article className="feature-card has-icon" key={`${benefit.title}-${index}`}>
                <span className="feature-icon" aria-hidden="true">
                  {benefitIcons[index % benefitIcons.length]}
                </span>
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
                <article className="feature-card has-icon" key={job.id}>
                  <span className="feature-icon" aria-hidden="true">
                    <Briefcase size={22} strokeWidth={1.6} />
                  </span>
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
