import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { SubNav } from "../../components/SubNav";
import { Compass, ShieldCheck, Sparkles, Users2, FileCheck2, Landmark } from "lucide-react";

const labels = {
  en: {
    introTitle: "RADCOM in one line",
    introLead:
      "We connect people in modern cities through integrated mobility technology built for reliability and scale.",
    visionCard: "Vision",
    missionCard: "Mission",
    valuesCard: "Values",
    visionDesc: "How we see the future of urban mobility.",
    missionDesc: "What we build every day for operators and passengers.",
    valuesDesc: "Principles that guide every technical decision.",
    storyTitle: "Why we exist",
    storyLead:
      "RADCOM partners with cities and operators to make mobility dependable, connected, and human.",
    clientTitle: "What this means for operators",
    clientLead:
      "Faster deployments, clearer operations, and predictable passenger journeys.",
    clientPoints: [
      {
        title: "One partner, one stack",
        desc: "Hardware, software, integration, and support in a single delivery."
      },
      {
        title: "Operational clarity",
        desc: "Real-time insight that reduces delays and improves punctuality."
      },
      {
        title: "Passenger trust",
        desc: "Accurate information and seamless fare experiences."
      }
    ],
    highlights: [
      {
        title: "Integrated systems",
        desc: "Hardware + software built to operate as one stack."
      },
      {
        title: "Operational clarity",
        desc: "Real-time insight for faster, safer decisions."
      },
      {
        title: "Passenger-first design",
        desc: "Reliable journeys that feel intuitive and predictable."
      }
    ],
    explore: "Explore",
    aboutCard: "History",
    teamCard: "Team",
    certificationsCard: "Certifications",
    aboutDesc: "RADCOM history and milestones.",
    teamDesc: "The specialists delivering our projects.",
    certDesc: "ISO standards and strategic partnerships."
  },
  ro: {
    introTitle: "RADCOM, pe scurt",
    introLead:
      "Conectăm oamenii în orașe moderne prin tehnologii integrate de mobilitate, construite pentru fiabilitate și scalare.",
    visionCard: "Viziune",
    missionCard: "Misiune",
    valuesCard: "Valori",
    visionDesc: "Cum vedem viitorul mobilității urbane.",
    missionDesc: "Ce construim în fiecare zi pentru operatori și pasageri.",
    valuesDesc: "Principii care ghidează fiecare decizie tehnică.",
    storyTitle: "De ce existăm",
    storyLead:
      "RADCOM colaborează cu orașe și operatori pentru o mobilitate sigură, conectată și umană.",
    clientTitle: "Ce înseamnă asta pentru operatori",
    clientLead:
      "Implementări rapide, operațiuni clare și călătorii previzibile.",
    clientPoints: [
      {
        title: "Un singur partener, un singur stack",
        desc: "Hardware, software, integrare și suport livrate unitar."
      },
      {
        title: "Claritate operațională",
        desc: "Vizibilitate în timp real care reduce întârzierile."
      },
      {
        title: "Încredere pentru pasageri",
        desc: "Informații corecte și taxare fără fricțiuni."
      }
    ],
    highlights: [
      {
        title: "Sisteme integrate",
        desc: "Hardware + software gândite să funcționeze ca un singur ecosistem."
      },
      {
        title: "Claritate operațională",
        desc: "Date în timp real pentru decizii rapide și sigure."
      },
      {
        title: "Design pentru pasageri",
        desc: "Călătorii previzibile, simple și de încredere."
      }
    ],
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
    { label: t.visionCard, href: "/compania/viziune" },
    { label: t.missionCard, href: "/compania/misiune" },
    { label: t.valuesCard, href: "/compania/valori" },
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

      <div className="anchor-nav">
        <div className="container">
          <a href="#overview">{locale === "ro" ? "Prezentare" : "Overview"}</a>
          <a href="#story">{locale === "ro" ? "Poveste" : "Story"}</a>
          <a href="#explore">{locale === "ro" ? "Explorează" : "Explore"}</a>
        </div>
      </div>

      <section className="section-block" id="overview">
        <div className="container">
          <h2 className="section-title">{t.introTitle}</h2>
          <p className="section-lead">{t.introLead}</p>
          <div className="feature-grid" style={{ marginTop: 24 }}>
            <a className="feature-card has-icon" href={`/${locale}/compania/viziune`}>
              <span className="feature-icon" aria-hidden="true">
                <Compass size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.visionCard}</h3>
              <p>{t.visionDesc}</p>
            </a>
            <a className="feature-card has-icon" href={`/${locale}/compania/misiune`}>
              <span className="feature-icon" aria-hidden="true">
                <Sparkles size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.missionCard}</h3>
              <p>{t.missionDesc}</p>
            </a>
            <a className="feature-card has-icon" href={`/${locale}/compania/valori`}>
              <span className="feature-icon" aria-hidden="true">
                <ShieldCheck size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.valuesCard}</h3>
              <p>{t.valuesDesc}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section-block alt" id="story">
        <div className="container company-story-grid">
          <div className="company-story">
            <p className="eyebrow">{t.storyTitle}</p>
            <h2 className="section-title">{t.storyLead}</h2>
            {paragraphize(page.body || "").map((line, index) =>
              line.startsWith(">")
                ? (
                    <blockquote className="company-quote" key={`quote-${index}`}>
                      {line.replace(/^>\s*/, "")}
                    </blockquote>
                  )
                : (
                    <p className="section-lead" key={`line-${index}`}>
                      {line}
                    </p>
                  )
            )}
          </div>
          <div className="company-highlights">
            {t.highlights.map((item, index) => (
              <div className="card company-highlight" key={`${item.title}-${index}`}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <p className="eyebrow">{t.clientTitle}</p>
          <h2 className="section-title">{t.clientLead}</h2>
          <div className="feature-grid" style={{ marginTop: 24 }}>
            {t.clientPoints.map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="explore">
        <div className="container">
          <h2 className="section-title">{t.explore}</h2>
          <div className="feature-grid">
            <a className="feature-card has-icon" href={`/${locale}/compania/istoric`}>
              <span className="feature-icon" aria-hidden="true">
                <Landmark size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.aboutCard}</h3>
              <p>{t.aboutDesc}</p>
            </a>
            <a className="feature-card has-icon" href={`/${locale}/compania/echipa`}>
              <span className="feature-icon" aria-hidden="true">
                <Users2 size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.teamCard}</h3>
              <p>{t.teamDesc}</p>
            </a>
            <a className="feature-card has-icon" href={`/${locale}/compania/certificari`}>
              <span className="feature-icon" aria-hidden="true">
                <FileCheck2 size={22} strokeWidth={1.6} />
              </span>
              <h3>{t.certificationsCard}</h3>
              <p>{t.certDesc}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
