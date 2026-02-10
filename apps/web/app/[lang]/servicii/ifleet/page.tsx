import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
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
  return (
    <main>
      <section className="section-block accent">
        <div className="container">
          <div className="service-hero-logo">
            <img src="/products/iFleet.svg" alt="RADCOM iFleet logo" loading="lazy" decoding="async" />
          </div>
          <h1 className="section-title">{product.title}</h1>
          <p className="section-lead">{productPage.description}</p>
          <p className="section-lead">{productPage.detailedDescription}</p>
        </div>
      </section>
      <section className="section-block alt">
        <div className="container editorial-grid">
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
      </section>

      <section
        className="visual-strip"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.8), rgba(15,33,58,0.4)), url(https://images.unsplash.com/photo-T32G9zARSr4?auto=format&fit=crop&w=1600&q=80)"
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
