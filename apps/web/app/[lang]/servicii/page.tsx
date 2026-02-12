import { getServices } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getServicesLabels } from "../../lib/site-copy";
import { FeatureList } from "../../components/FeatureList";
import { servicesLinks } from "../../lib/services-nav";
import Breadcrumbs from "../../components/Breadcrumbs";
import type { Metadata } from "next";

const productLogos: Record<string, string> = {
  ifleet: "/products/iFleet.svg",
  optifare: "/products/OptiFare.svg",
  exact: "/products/eXact.svg"
};
const productVisuals: Record<string, string> = {
  ifleet: "/ref-assets/bus.png",
  optifare: "/ref-assets/telecommunication.png",
  exact: "/ref-assets/world-grid.png"
};

const copy = {
  en: {
    meta: "Services",
    lead: "Integrated systems for urban mobility.",
    highlights: [
      {
        title: "Unified platform",
        desc: "Fare collection, fleet, and passenger info in one ecosystem."
      },
      {
        title: "Operational focus",
        desc: "Designed for dispatchers, drivers, and city operators."
      },
      {
        title: "Scalable delivery",
        desc: "From single depots to city-wide deployments."
      }
    ],
    sideTitle: "Core pillars",
    sideItems: ["Integration", "Reliability", "Security", "Support"]
  },
  ro: {
    meta: "Servicii",
    lead: "Sisteme integrate pentru mobilitate urbană.",
    highlights: [
      {
        title: "Platformă unificată",
        desc: "Taxare, flotă și informare pasageri în același ecosistem."
      },
      {
        title: "Focus operațional",
        desc: "Gândite pentru dispeceri, șoferi și operatori urbani."
      },
      {
        title: "Livrare scalabilă",
        desc: "De la depouri izolate la orașe întregi."
      }
    ],
    sideTitle: "Pilonii noștri",
    sideItems: ["Integrare", "Fiabilitate", "Securitate", "Suport"]
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "ro" ? "ro" : "en";
  const title =
    locale === "ro"
      ? "Servicii RADCOM — Fleet, E-ticketing, Informare pasageri"
      : "RADCOM Services — Fleet, E-ticketing, Passenger info";
  const description =
    locale === "ro"
      ? "Soluții ITS complete: iFleet, OptiFare și eXact, plus integrare hardware + software."
      : "Complete ITS solutions: iFleet, OptiFare, and eXact with hardware + software integration.";
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

export default async function ServiciiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const products = await getServices(locale);
  const labels = getServicesLabels(locale);
  const t = copy[locale];
  const breadcrumbs = [
    { label: locale === "ro" ? "Acasă" : "Home", href: `/${locale}` },
    { label: locale === "ro" ? "Servicii" : "Services" }
  ];
  const nextSteps = {
    en: {
      eyebrow: "Next steps",
      title: "Keep exploring",
      lead: "See who we are, browse insights, or request a discussion.",
      cards: [
        {
          title: "About RADCOM",
          desc: "The team, mission, and certifications behind the platform.",
          href: "/compania"
        },
        {
          title: "Articles",
          desc: "Insights on technology and mobility trends.",
          href: "/articole"
        },
        {
          title: "Contact",
          desc: "Talk to us about your deployment.",
          href: "/contact"
        }
      ]
    },
    ro: {
      eyebrow: "Pașii următori",
      title: "Continuă explorarea",
      lead: "Află cine suntem, citește articole sau cere o discuție.",
      cards: [
        {
          title: "Despre RADCOM",
          desc: "Echipa, misiunea și certificările care susțin platforma.",
          href: "/compania"
        },
        {
          title: "Articole",
          desc: "Perspective despre tehnologie și mobilitate.",
          href: "/articole"
        },
        {
          title: "Contact",
          desc: "Discutăm despre implementare.",
          href: "/contact"
        }
      ]
    }
  }[locale];
  const proofPoints = {
    en: [
      { label: "Integrated products", value: "3 core systems" },
      { label: "Deployment time", value: "8–16 weeks" },
      { label: "Operational uptime", value: "99.5–99.9%" }
    ],
    ro: [
      { label: "Produse integrate", value: "3 sisteme de bază" },
      { label: "Timp implementare", value: "8–16 săptămâni" },
      { label: "Disponibilitate operațională", value: "99,5–99,9%" }
    ]
  };
  const rolloutSteps = {
    en: [
      {
        title: "Assess & align",
        desc: "Audit fleet, ticketing, and passenger info requirements."
      },
      {
        title: "Deploy & integrate",
        desc: "Install hardware, connect software, and train teams."
      },
      {
        title: "Operate & scale",
        desc: "Monitor KPIs, improve service quality, and expand."
      }
    ],
    ro: [
      {
        title: "Analiză & aliniere",
        desc: "Audit flotă, taxare și cerințe informare pasageri."
      },
      {
        title: "Implementare & integrare",
        desc: "Instalăm hardware, conectăm software și instruim echipele."
      },
      {
        title: "Operare & scalare",
        desc: "Monitorizăm KPI, creștem calitatea și extindem."
      }
    ]
  };
  const productShowcase = {
    en: {
      title: "Transport-ready hardware",
      lead: "Field-proven equipment that connects to the RADCOM platform.",
      items: [
        {
          title: "Ticket validators",
          desc: "Fast contactless validation with secure hardware.",
          image: "/ref-assets/ECheckValidator.webp"
        },
        {
          title: "Driver console",
          desc: "Operational control for schedules, messages, and status.",
          image: "/ref-assets/DriverConsole.webp"
        },
        {
          title: "Passenger displays",
          desc: "High-visibility LED information for stops and stations.",
          image: "/ref-assets/LEDInformationDisplay.webp"
        },
        {
          title: "Audio control",
          desc: "Clear announcements and synchronized onboard audio.",
          image: "/ref-assets/AudioSmartMaster.webp"
        },
        {
          title: "Vehicle tracking",
          desc: "Onboard unit for telemetry, GPS, and diagnostics.",
          image: "/ref-assets/ETrack.webp"
        },
        {
          title: "Parking & mobility",
          desc: "Meters and curbside equipment for smart mobility.",
          image: "/ref-assets/EParkParkomerter.webp"
        }
      ]
    },
    ro: {
      title: "Hardware pregătit pentru transport",
      lead: "Echipamente testate în teren, conectate la platforma RADCOM.",
      items: [
        {
          title: "Validatoare ticketing",
          desc: "Validare contactless rapidă, cu hardware securizat.",
          image: "/ref-assets/ECheckValidator.webp"
        },
        {
          title: "Consolă șofer",
          desc: "Control operațional pentru program, mesaje și status.",
          image: "/ref-assets/DriverConsole.webp"
        },
        {
          title: "Afișaje pasageri",
          desc: "Informare LED de mare vizibilitate în stații și vehicule.",
          image: "/ref-assets/LEDInformationDisplay.webp"
        },
        {
          title: "Control audio",
          desc: "Anunțuri clare și sincronizate la bord.",
          image: "/ref-assets/AudioSmartMaster.webp"
        },
        {
          title: "Tracking vehicule",
          desc: "Unitate onboard pentru telemetrie, GPS și diagnoză.",
          image: "/ref-assets/ETrack.webp"
        },
        {
          title: "Parcare & mobilitate",
          desc: "Echipamente curbside pentru ecosistemul urban.",
          image: "/ref-assets/EParkParkomerter.webp"
        }
      ]
    }
  }[locale];
  const faqs = {
    en: [
      {
        q: "Do you deliver hardware and software together?",
        a: "Yes, RADCOM delivers an integrated stack for fleet, ticketing, and passenger info."
      },
      {
        q: "How long does a full rollout take?",
        a: "Typical projects go live in 8–16 weeks based on scope."
      },
      {
        q: "Can we start with a pilot?",
        a: "Yes, we can deploy a pilot fleet and scale afterward."
      }
    ],
    ro: [
      {
        q: "Livrați hardware și software împreună?",
        a: "Da, RADCOM livrează un stack integrat pentru flotă, taxare și informare."
      },
      {
        q: "Cât durează o implementare completă?",
        a: "De regulă 8–16 săptămâni, în funcție de scope."
      },
      {
        q: "Putem începe cu un pilot?",
        a: "Da, putem implementa un pilot și apoi scala."
      }
    ]
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.title,
      description: product.description,
      brand: "RADCOM",
      url: `/${locale}${product.link}`
    }))
  };
  const quickLinks = servicesLinks[locale].filter((item) => item.href !== "/servicii");

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="section-block primary">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title">{labels.heroTitle}</h1>
          <p className="section-lead">{labels.heroSubtitle}</p>
          <p className="section-lead">{labels.heroDescription}</p>
        </div>
      </section>
      <section className="section-block alt" id="solutions">
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
              {labels.solutionsTitle}
            </h2>
            <p className="section-lead">{labels.solutionsDescription}</p>
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
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-header ${product.tone}`}>
                  <img
                    className="product-logo"
                    src={productLogos[product.id] || "/logo-blue.webp"}
                    alt={`${product.title} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="product-visual"
                    src={productVisuals[product.id] || "/ref-assets/world-grid.png"}
                    alt={`${product.title} visual`}
                    loading="lazy"
                    decoding="async"
                  />
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                </div>
                <div className="product-content">
                  <p>{product.description}</p>
                  <FeatureList items={product.features} />
                  <a className="product-cta" href={`/${locale}${product.link}`}>
                    {locale === "ro" ? "Descoperă" : "Discover"} {product.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="container" style={{ marginTop: 48 }}>
          <div className="product-showcase">
            <h2 className="section-title">{productShowcase.title}</h2>
            <p className="section-lead">{productShowcase.lead}</p>
            <div className="product-showcase-grid">
              {productShowcase.items.map((item) => (
                <article className="product-showcase-card" key={item.title}>
                  <div className="product-showcase-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="product-showcase-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 32 }}>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                {locale === "ro"
                  ? "„Implementarea s-a făcut rapid, iar echipele noastre au avut suport constant.”"
                  : "“Implementation was fast and the teams had consistent support.”"}
              </p>
              <span>
                {locale === "ro" ? "Operator transport public" : "Public transport operator"}
              </span>
            </div>
            <div className="testimonial-card">
              <p>
                {locale === "ro"
                  ? "„Sistemele sunt stabile și scalabile, ceea ce ne-a permis extinderea ușoară.”"
                  : "“Systems are stable and scalable, making expansion easy.”"}
              </p>
              <span>
                {locale === "ro" ? "Operator regional" : "Regional operator"}
              </span>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <a className="secondary" href={`/${locale}/studii-de-caz`}>
              {locale === "ro" ? "Vezi studiul de caz" : "View case study"}
            </a>
          </div>
        </div>
      </section>

      <section className="section-block" id="integration">
        <div className="container">
          <h2 className="section-title">{labels.integrationTitle}</h2>
          <div className="grid">
            {labels.stats.map((stat) => (
              <div className="card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="section-lead">{labels.integrationLead}</p>
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

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{locale === "ro" ? "Întrebări frecvente" : "FAQ"}</h2>
          <div className="faq-grid">
            {faqs[locale].map((item) => (
              <div className="card faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block primary" id="cta">
        <div className="container cta">
          <h2 className="section-title">{labels.ctaTitle}</h2>
          <p className="section-lead">{labels.ctaLead}</p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {labels.ctaButton}
            </a>
            <a className="secondary" href={`/${locale}/studii-de-caz`}>
              {locale === "ro" ? "Vezi studiul de caz" : "View case study"}
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
