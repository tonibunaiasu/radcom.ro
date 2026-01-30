import { getServices } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getServicesLabels } from "../../lib/site-copy";

const productLogos: Record<string, string> = {
  ifleet: "/products/iFleet.svg",
  optifare: "/products/OptiFare.svg",
  exact: "/products/eXact.svg"
};

export default async function ServiciiPage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const products = await getServices(locale);
  const labels = getServicesLabels(locale);

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{labels.heroTitle}</h1>
          <p className="section-lead">{labels.heroSubtitle}</p>
          <p className="section-lead">{labels.heroDescription}</p>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{labels.solutionsTitle}</h2>
          <p className="section-lead">{labels.solutionsDescription}</p>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-header ${product.tone}`}>
                  <img
                    className="product-logo"
                    src={productLogos[product.id] || "/logo-blue.png"}
                    alt={`${product.title} logo`}
                  />
                  <h3>{product.title}</h3>
                  <p>{product.subtitle}</p>
                </div>
                <div className="product-content">
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature: string) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className="product-cta" href={`/${locale}${product.link}`}>
                    {locale === "ro" ? "Descoperă" : "Discover"} {product.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
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

      <section className="section-block primary">
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
