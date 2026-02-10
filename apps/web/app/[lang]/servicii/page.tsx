import { getServices } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getServicesLabels } from "../../lib/site-copy";
import { FeatureList } from "../../components/FeatureList";
import { SubNav } from "../../components/SubNav";

const productLogos: Record<string, string> = {
  ifleet: "/products/iFleet.svg",
  optifare: "/products/OptiFare.svg",
  exact: "/products/eXact.svg"
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

export default async function ServiciiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const products = await getServices(locale);
  const labels = getServicesLabels(locale);
  const t = copy[locale];
  const subnavItems = [
    { label: "iFleet", href: "/servicii/ifleet" },
    { label: "OptiFare", href: "/servicii/optifare" },
    { label: "eXact", href: "/servicii/exact" }
  ];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{labels.heroTitle}</h1>
          <p className="section-lead">{labels.heroSubtitle}</p>
          <p className="section-lead">{labels.heroDescription}</p>
        </div>
      </section>
      <SubNav items={subnavItems} />

      <div className="anchor-nav">
        <div className="container">
          <a href="#solutions">{locale === "ro" ? "Soluții" : "Solutions"}</a>
          <a href="#integration">{locale === "ro" ? "Integrare" : "Integration"}</a>
          <a href="#cta">{locale === "ro" ? "Contact" : "Contact"}</a>
        </div>
      </div>

      <section className="section-block alt" id="solutions">
        <div className="container editorial-grid">
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
        <div className="container" style={{ marginTop: 32 }}>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-header ${product.tone}`}>
                  <img
                    className="product-logo"
                    src={productLogos[product.id] || "/logo-blue.png"}
                    alt={`${product.title} logo`}
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

      <section className="section-block primary" id="cta">
        <div className="container cta">
          <h2 className="section-title">{labels.ctaTitle}</h2>
          <p className="section-lead">{labels.ctaLead}</p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {labels.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
