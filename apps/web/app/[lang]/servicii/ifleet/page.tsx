import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { servicesBreadcrumbs, servicesLinks } from "../../../lib/services-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { BarChart3, Cpu, Gauge, MapPin, ShieldCheck, Video } from "lucide-react";

const editorialCopy = {
  en: {
    meta: "iFleet",
    lead: "Integrated fleet intelligence for urban operators.",
    microBenefits: [
      "Higher on-time performance",
      "Lower fuel and idle costs",
      "Clear incident response"
    ],
    highlights: [
      {
        title: "Operational visibility",
        desc: "Real-time fleet data in one control view."
      },
      {
        title: "Passenger confidence",
        desc: "Reliable journeys built on accurate telemetry."
      },
      {
        title: "Scalable rollout",
        desc: "From pilot fleets to city-wide coverage."
      }
    ],
    sideTitle: "Core outcomes",
    sideItems: ["Reliability", "Optimization", "Safety", "Insights"]
  },
  ro: {
    meta: "iFleet",
    lead: "Inteligență integrată pentru flote urbane.",
    microBenefits: [
      "Punctualitate mai bună",
      "Costuri mai mici combustibil",
      "Răspuns rapid la incidente"
    ],
    highlights: [
      {
        title: "Vizibilitate operațională",
        desc: "Date în timp real într-un singur centru de control."
      },
      {
        title: "Încredere pentru pasageri",
        desc: "Călătorii predictibile bazate pe date precise."
      },
      {
        title: "Implementare scalabilă",
        desc: "De la pilot la acoperire la nivel de oraș."
      }
    ],
    sideTitle: "Rezultate",
    sideItems: ["Fiabilitate", "Optimizare", "Siguranță", "Insight-uri"]
  }
};

const cobSpecs = [
  { key: "processor", value: "Intel Atom QC x7 / E3950 (1.6~2.0GHz)" },
  { key: "memory", value: "DDR3L SO-DIMM până la 16 GB" },
  { key: "storage", value: "mSATA SSD" },
  { key: "communication", value: "2G/3G/4G, WiFi 802.11ac, Bluetooth 4.2" },
  { key: "os", value: "Linux" },
  { key: "upgrade", value: "Local / Remote" }
];

const cobResponsibilities = {
  en: [
    "Data logging: GPS, speed, mileage, CAN bus, validations",
    "Real-time tracking and stop detection aligned with routes",
    "Driver support: authentication, route selection, dispatcher communication",
    "Passenger information on interior/exterior displays",
    "Integration with passenger counting and e-ticketing"
  ],
  ro: [
    "Înregistrare date: GPS, viteză, kilometraj, CAN autobuz, validări",
    "Urmărire în timp real și detectare opriri corelate cu ruta",
    "Suport șofer: autentificare, selectare traseu, comunicare dispecerat",
    "Informații pasageri prin afișaje interioare/exterioare",
    "Integrare cu numărare pasageri și e-ticketing"
  ]
};

const benefits = {
  en: [
    {
      title: "Operational efficiency",
      desc: "Route optimization, reduced fuel costs, and schedule compliance."
    },
    {
      title: "Increased safety",
      desc: "24/7 monitoring, incident alerts, and video evidence."
    },
    {
      title: "Data-driven decisions",
      desc: "Real-time KPIs, detailed reports, and predictive analytics."
    },
    {
      title: "Better passenger experience",
      desc: "Accurate information, punctuality, and improved experience."
    }
  ],
  ro: [
    {
      title: "Eficiență operațională",
      desc: "Optimizare rute, reducere cost combustibil, respectare program."
    },
    {
      title: "Siguranță sporită",
      desc: "Monitorizare 24/7, alertare incidente și dovezi video."
    },
    {
      title: "Decizii bazate pe date",
      desc: "KPI în timp real, rapoarte detaliate și analize predictive."
    },
    {
      title: "Satisfacție pasageri",
      desc: "Informații precise, punctualitate și experiență îmbunătățită."
    }
  ]
};

const nextSteps = {
  en: {
    title: "Next steps",
    items: [
      {
        title: "Explore all RADCOM solutions",
        description: "Compare iFleet with our complementary mobility platforms.",
        href: "/servicii"
      },
      {
        title: "See real-world outcomes",
        description: "Review case studies from modern transit operators.",
        href: "/studii-de-caz"
      },
      {
        title: "Plan a technical discussion",
        description: "Tell us about your fleet and deployment timeline.",
        href: "/contact"
      }
    ]
  },
  ro: {
    title: "Următorii pași",
    items: [
      {
        title: "Vezi toate soluțiile RADCOM",
        description: "Compară iFleet cu platformele noastre complementare.",
        href: "/servicii"
      },
      {
        title: "Descoperă rezultate reale",
        description: "Studii de caz din transport public modern.",
        href: "/studii-de-caz"
      },
      {
        title: "Programează o discuție",
        description: "Spune-ne despre flota ta și planul de implementare.",
        href: "/contact"
      }
    ]
  }
};

const proofPoints = {
  en: [
    { label: "Deployment timeline", value: "8–14 weeks" },
    { label: "Fleet coverage", value: "50–500+ vehicles" },
    { label: "Data uptime", value: "99.5–99.9%" }
  ],
  ro: [
    { label: "Timp implementare", value: "8–14 săptămâni" },
    { label: "Acoperire flotă", value: "50–500+ vehicule" },
    { label: "Disponibilitate date", value: "99,5–99,9%" }
  ]
};

const rolloutSteps = {
  en: [
    {
      title: "Assess & plan",
      desc: "Audit routes, fleet hardware, and data integrations."
    },
    {
      title: "Install & integrate",
      desc: "Deploy devices, connect control center, and configure dashboards."
    },
    {
      title: "Operate & optimize",
      desc: "Train teams, monitor KPIs, and tune performance."
    }
  ],
  ro: [
    {
      title: "Analiză & plan",
      desc: "Audit rute, hardware flotă și integrări de date."
    },
    {
      title: "Instalare & integrare",
      desc: "Instalăm dispozitivele și configurăm centrul de control."
    },
    {
      title: "Operare & optimizare",
      desc: "Training echipe, monitorizare KPI și optimizare continuă."
    }
  ]
};

const faqs = {
  en: [
    {
      q: "How fast can iFleet go live?",
      a: "Typical deployments take 8–14 weeks depending on fleet size and integrations."
    },
    {
      q: "Does it integrate with existing hardware?",
      a: "Yes. We support mixed fleets and can integrate with existing onboard devices."
    },
    {
      q: "What data do operators get?",
      a: "Real-time KPIs, route adherence, incident alerts, and operational reports."
    }
  ],
  ro: [
    {
      q: "Cât de repede se poate implementa iFleet?",
      a: "De obicei 8–14 săptămâni, în funcție de flotă și integrări."
    },
    {
      q: "Se integrează cu hardware existent?",
      a: "Da. Suportăm flote mixte și integrare cu echipamente existente."
    },
    {
      q: "Ce date primesc operatorii?",
      a: "KPI în timp real, respectare trasee, alerte și rapoarte."
    }
  ]
};

const useCases = {
  en: [
    {
      title: "Dispatch control",
      desc: "Live dashboards show delays, incidents, and route adherence."
    },
    {
      title: "Maintenance planning",
      desc: "Use mileage and telemetry to plan service windows."
    },
    {
      title: "Passenger assurance",
      desc: "Predictable ETAs and fewer unexpected disruptions."
    }
  ],
  ro: [
    {
      title: "Control dispecerat",
      desc: "Dashboard-uri live pentru întârzieri, incidente și respectare rute."
    },
    {
      title: "Planificare mentenanță",
      desc: "Folosim kilometraj și telemetrie pentru programarea reviziilor."
    },
    {
      title: "Încredere pasageri",
      desc: "ETA-uri predictibile și mai puține întreruperi."
    }
  ]
};

const relatedContent = {
  en: [
    {
      title: "Complementary: OptiFare",
      desc: "Add ticketing to complete the mobility stack.",
      href: "/servicii/optifare"
    },
    {
      title: "Article: Fare collection future",
      desc: "How integrated payment systems boost adoption.",
      href: "/articole/fare-collection-future"
    },
    {
      title: "Case study",
      desc: "A full-stack deployment for a public operator.",
      href: "/studii-de-caz"
    }
  ],
  ro: [
    {
      title: "Complementar: OptiFare",
      desc: "Completează stack‑ul cu taxare modernă.",
      href: "/servicii/optifare"
    },
    {
      title: "Articol: Viitorul taxării",
      desc: "Cum crește adopția plăților integrate.",
      href: "/articole/fare-collection-future"
    },
    {
      title: "Studiu de caz",
      desc: "Implementare full‑stack pentru un operator public.",
      href: "/studii-de-caz"
    }
  ]
};

export default async function IFleetPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const product = copy.products.ifleet;
  const productPage = copy.products.ifleetPage;
  const e = editorialCopy[locale];
  const features = Object.entries(productPage.features)
    .filter(([key]) => !key.endsWith("Desc"))
    .map(([key, title]) => ({
      title: String(title),
      description: String(productPage.features[`${key}Desc` as keyof typeof productPage.features] || "")
    }));
  const featureIcons = [
    <MapPin key="map" size={22} strokeWidth={1.6} />,
    <Video key="video" size={22} strokeWidth={1.6} />,
    <Gauge key="gps" size={22} strokeWidth={1.6} />,
    <BarChart3 key="report" size={22} strokeWidth={1.6} />,
    <Cpu key="cob" size={22} strokeWidth={1.6} />,
    <ShieldCheck key="secure" size={22} strokeWidth={1.6} />
  ];
  const benefitIcons = [
    <BarChart3 key="eff" size={22} strokeWidth={1.6} />,
    <ShieldCheck key="safe" size={22} strokeWidth={1.6} />,
    <MapPin key="route" size={22} strokeWidth={1.6} />
  ];
  const currentPath = "/servicii/ifleet";
  const breadcrumbs = servicesBreadcrumbs(locale, "iFleet");
  const quickLinks = servicesLinks[locale].filter((item) => item.href !== currentPath);
  return (
    <main>
      <section className="section-block accent">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="service-hero-logo">
            <img src="/products/iFleet.svg" alt="RADCOM iFleet logo" loading="lazy" decoding="async" />
          </div>
          <h1 className="section-title">{product.title}</h1>
          <p className="section-lead">{productPage.description}</p>
          <p className="section-lead">{productPage.detailedDescription}</p>
        </div>
      </section>
      <section className="section-block alt">
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
              {e.meta}
              <span />
              {e.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {product.subtitle}
            </h2>
            <div className="micro-benefits">
              {e.microBenefits.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="editorial-highlights">
              {e.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="editorial-side">
            <div className="editorial-card">
              <h4>{e.sideTitle}</h4>
              <ul>
                {e.sideItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        </div>
      </section>

      <section
        className="visual-strip"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.8), rgba(15,33,58,0.4)), url(/hero/industries-stripe.webp)"
        }}
      >
        <div className="container">
          <p>
            {locale === "ro"
              ? "Monitorizare inteligentă și optimizare în timp real pentru flote urbane."
              : "Smart monitoring and real-time optimization for urban fleets."}
          </p>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Funcționalități cheie" : "Key features"}
          </h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card has-icon" key={`${feature.title}-${index}`}>
                <span className="feature-icon" aria-hidden="true">
                  {featureIcons[index % featureIcons.length]}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {productPage.cobSpecs.title}
          </h2>
          <div className="two-col">
            <div className="card">
              <h3>{locale === "ro" ? "Ce gestionează COB?" : "What does the COB handle?"}</h3>
              <ul className="bullets">
                {cobResponsibilities[locale].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{locale === "ro" ? "Specificații tehnice" : "Technical specifications"}</h3>
              <div className="specs">
                {cobSpecs.map((spec) => (
                  <div key={spec.key}>
                    <span>{productPage.cobSpecs[spec.key]}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Beneficii pentru operatori" : "Benefits for operators"}
          </h2>
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

      <section className="section-block alt">
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

      <section className="section-block">
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

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Scenarii de utilizare" : "Use cases"}
          </h2>
          <div className="feature-grid">
            {useCases[locale].map((item) => (
              <div className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Conținut relevant" : "Related content"}
          </h2>
          <div className="feature-grid">
            {relatedContent[locale].map((item) => (
              <a className="feature-card" key={item.title} href={`/${locale}${item.href}`}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{nextSteps[locale].title}</h2>
          <div className="feature-grid">
            {nextSteps[locale].items.map((item) => (
              <a className="feature-card" key={item.title} href={`/${locale}${item.href}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block accent">
        <div className="container cta">
          <h2 className="section-title">
            {locale === "ro" ? "Gata să optimizezi flota?" : "Ready to optimize your fleet?"}
          </h2>
          <p className="section-lead">
            {locale === "ro"
              ? "Contactează-ne pentru o discuție despre sistemul RADCOM iFleet."
              : "Contact us for a discussion about the RADCOM iFleet system."}
          </p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {locale === "ro" ? "Solicită o discuție" : "Request a discussion"}
            </a>
            <a className="secondary" href={`/${locale}/servicii`}>
              {locale === "ro" ? "Vezi toate produsele" : "View all products"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
