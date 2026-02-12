import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";
import Breadcrumbs from "../../components/Breadcrumbs";
import type { Metadata } from "next";

const editorialCopy = {
  en: {
    meta: "Case study",
    lead: "A clear look at delivery, results, and impact.",
    highlights: [
      {
        title: "Unified delivery",
        desc: "Hardware + software shipped as one integrated system."
      },
      {
        title: "Operational outcomes",
        desc: "Better punctuality, visibility, and passenger updates."
      },
      {
        title: "Scalable rollout",
        desc: "Designed for growth across fleets and depots."
      }
    ],
    sideTitle: "Project lens",
    sideItems: ["Operator needs", "Passenger impact", "Technology stack", "Results"]
  },
  ro: {
    meta: "Studiu de caz",
    lead: "O privire clară asupra livrării, rezultatelor și impactului.",
    highlights: [
      {
        title: "Livrare unificată",
        desc: "Hardware + software livrate ca un singur sistem."
      },
      {
        title: "Rezultate operaționale",
        desc: "Punctualitate mai bună și informare consecventă."
      },
      {
        title: "Implementare scalabilă",
        desc: "Gândită pentru extindere pe flote și depouri."
      }
    ],
    sideTitle: "Lens proiect",
    sideItems: ["Nevoi operator", "Impact pasageri", "Stack tehnologic", "Rezultate"]
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "ro" ? "ro" : "en";
  const title = locale === "ro" ? "Studiu de caz RADCOM" : "RADCOM Case Study";
  const description =
    locale === "ro"
      ? "Exemplu de livrare end-to-end pentru un operator de transport public."
      : "Example of end-to-end delivery for a public transport operator.";
  const image = "/hero/company.webp";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function StudiiDeCazPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("studii-de-caz", locale);
  const page = (await getPage("studii-de-caz", locale)) || fallback;
  const t = editorialCopy[locale];
  const breadcrumbs = [
    { label: locale === "ro" ? "Acasă" : "Home", href: `/${locale}` },
    { label: locale === "ro" ? "Studiu de caz" : "Case study" }
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
      { label: "Delivery scope", value: "Fleet + ticketing" },
      { label: "Rollout time", value: "10–16 weeks" },
      { label: "Operational impact", value: "Higher punctuality" }
    ],
    ro: [
      { label: "Domeniu livrare", value: "Flotă + taxare" },
      { label: "Timp implementare", value: "10–16 săptămâni" },
      { label: "Impact operațional", value: "Punctualitate mai bună" }
    ]
  };
  const rolloutSteps = {
    en: [
      {
        title: "Alignment",
        desc: "Confirm objectives, data needs, and KPIs."
      },
      {
        title: "Delivery",
        desc: "Install hardware, integrate software, and validate."
      },
      {
        title: "Operations",
        desc: "Train teams and optimize service performance."
      }
    ],
    ro: [
      {
        title: "Aliniere",
        desc: "Confirmăm obiectivele, datele și KPI‑urile."
      },
      {
        title: "Livrare",
        desc: "Instalăm hardware, integrăm software și validăm."
      },
      {
        title: "Operare",
        desc: "Training echipe și optimizare performanță."
      }
    ]
  };
  const quickLinks = [
    { label: locale === "ro" ? "Servicii" : "Services", href: "/servicii" },
    { label: locale === "ro" ? "Articole" : "Articles", href: "/articole" },
    { label: locale === "ro" ? "Despre RADCOM" : "About RADCOM", href: "/compania" },
    { label: locale === "ro" ? "Contact" : "Contact", href: "/contact" }
  ];

  return (
    <main>
      <section className="section-block primary hero-banner">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="inline-links">
            {quickLinks.map((item) => (
              <a key={item.href} href={`/${locale}${item.href}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="editorial-grid">
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
        </div>
        <div className="container" style={{ marginTop: 32 }}>
          {renderBody(page.body)}
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
    </main>
  );
}
