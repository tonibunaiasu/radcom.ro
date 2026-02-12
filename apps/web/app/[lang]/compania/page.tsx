import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { companyLinks } from "../../lib/company-nav";
import Breadcrumbs from "../../components/Breadcrumbs";
import {
  Activity,
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  Users2,
  FileCheck2,
  Landmark
} from "lucide-react";
import type { Metadata } from "next";

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "ro" ? "ro" : "en";
  const title = locale === "ro" ? "Despre RADCOM" : "About RADCOM";
  const description =
    locale === "ro"
      ? "Partenerul tău pentru sisteme ITS integrate: hardware, software și suport."
      : "Your partner for integrated ITS systems: hardware, software, and support.";
  const image = "/hero/company.webp";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function CompaniaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania", locale);
  const page = (await getPage("compania", locale)) || fallback;
  const t = labels[locale];
  const breadcrumbs = [
    { label: locale === "ro" ? "Acasă" : "Home", href: `/${locale}` },
    { label: locale === "ro" ? "Compania" : "Company" }
  ];
  const cta = {
    title: locale === "ro" ? "Hai să discutăm despre proiectul tău" : "Let’s discuss your project",
    lead:
      locale === "ro"
        ? "Spune-ne despre obiective și revenim cu pașii următori."
        : "Tell us about your goals and we’ll outline the next steps.",
    primary: locale === "ro" ? "Solicită o discuție" : "Request a discussion",
    secondary: locale === "ro" ? "Vezi serviciile" : "See services"
  };
  const proofPoints = {
    en: [
      { label: "Hardware + software", value: "1 integrated stack" },
      { label: "Industry experience", value: "30+ years" },
      { label: "Delivery footprint", value: "City + regional" }
    ],
    ro: [
      { label: "Hardware + software", value: "1 stack integrat" },
      { label: "Experiență în industrie", value: "30+ ani" },
      { label: "Acoperire livrări", value: "Urban + regional" }
    ]
  };
  const rolloutSteps = {
    en: [
      {
        title: "Discovery",
        desc: "Align on goals, constraints, and stakeholders."
      },
      {
        title: "Delivery",
        desc: "Build, integrate, and validate the end-to-end system."
      },
      {
        title: "Long-term support",
        desc: "Operate, maintain, and continuously optimize."
      }
    ],
    ro: [
      {
        title: "Discovery",
        desc: "Aliniem obiective, constrângeri și stakeholderi."
      },
      {
        title: "Livrare",
        desc: "Construim, integrăm și validăm sistemul end‑to‑end."
      },
      {
        title: "Suport pe termen lung",
        desc: "Operare, mentenanță și optimizare continuă."
      }
    ]
  };
  const nextSteps = {
    en: {
      eyebrow: "Next steps",
      title: "Where to go next",
      lead: "Explore solutions, see a case study, or start a conversation.",
      cards: [
        {
          title: "Services",
          desc: "Discover the full RADCOM stack for urban mobility.",
          href: "/servicii"
        },
        {
          title: "Case Study",
          desc: "See how we deliver results for operators.",
          href: "/studii-de-caz"
        },
        {
          title: "Contact",
          desc: "Tell us about your project and timelines.",
          href: "/contact"
        }
      ]
    },
    ro: {
      eyebrow: "Pașii următori",
      title: "Unde mergi mai departe",
      lead: "Explorează soluțiile, studiu de caz sau pornește o discuție.",
      cards: [
        {
          title: "Servicii",
          desc: "Descoperă stack‑ul RADCOM pentru mobilitate urbană.",
          href: "/servicii"
        },
        {
          title: "Studiu de caz",
          desc: "Vezi rezultatele livrate pentru operatori.",
          href: "/studii-de-caz"
        },
        {
          title: "Contact",
          desc: "Spune-ne despre proiect și termene.",
          href: "/contact"
        }
      ]
    }
  }[locale];
  const clientIcons = [
    <Layers key="stack" size={22} strokeWidth={1.6} />,
    <Activity key="ops" size={22} strokeWidth={1.6} />,
    <ShieldCheck key="trust" size={22} strokeWidth={1.6} />
  ];
  const quickLinks = companyLinks[locale];
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
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>
      <section className="section-block" id="overview">
        <div className="container">
          <div className="inline-links">
            {quickLinks.map((item) => (
              <a key={item.href} href={`/${locale}${item.href}`}>
                {item.label}
              </a>
            ))}
          </div>
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
            {t.clientPoints.map((item, index) => (
              <div className="feature-card has-icon" key={item.title}>
                <span className="feature-icon" aria-hidden="true">
                  {clientIcons[index % clientIcons.length]}
                </span>
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

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Indicatori cheie" : "Proof points"}
          </h2>
          <div className="grid">
            {proofPoints[locale].map((item) => (
              <div className="card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Implementare în 3 pași" : "Implementation in 3 steps"}
          </h2>
          <div className="feature-grid">
            {rolloutSteps[locale].map((step, index) => (
              <div className="feature-card" key={`${step.title}-${index}`}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block primary">
        <div className="container cta">
          <h2 className="section-title">{cta.title}</h2>
          <p className="section-lead">{cta.lead}</p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {cta.primary}
            </a>
            <a className="secondary" href={`/${locale}/servicii`}>
              {cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <p className="eyebrow">{nextSteps.eyebrow}</p>
          <h2 className="section-title">{nextSteps.title}</h2>
          <p className="section-lead">{nextSteps.lead}</p>
          <div className="feature-grid" style={{ marginTop: 24 }}>
            {nextSteps.cards.map((card) => (
              <a className="feature-card" key={card.title} href={`/${locale}${card.href}`}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
