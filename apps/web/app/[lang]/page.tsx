import { getHomeContent, getPartners, getServices } from "../lib/sanity-queries";
import { SectionIcon } from "../components/SectionIcon";
import { getLocale } from "../lib/locale";
import { getHomeLabels } from "../lib/site-copy";
import { urlFor } from "../lib/sanity";

const productLogos: Record<string, string> = {
  ifleet: "/products/iFleet.svg",
  optifare: "/products/OptiFare.svg",
  exact: "/products/eXact.svg"
};

export default async function HomePage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const content = await getHomeContent(locale);
  const services = await getServices(locale);
  const partners = await getPartners();
  const labels = getHomeLabels(locale);

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">RADCOM</p>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.subtitle}</p>
            <div className="hero-actions">
              <a className="primary" href={`/${locale}/contact`}>
                {content.hero.ctaPrimary}
              </a>
              <a className="secondary" href={`/${locale}/servicii`}>
                {content.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h3>{labels.keyMetrics}</h3>
            <div className="stat-grid">
              {content.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{labels.servicesTitle}</h2>
            <p className="section-lead">{labels.servicesLead}</p>
          </div>
          <div className="product-grid">
            {services.map((service) => (
              <article className="product-card" key={service.id}>
                <div className={`product-header ${service.tone}`}>
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
                <div className="product-content">
                  <div className="product-icon">
                    <img
                      src={productLogos[service.id] || "/logo-blue.png"}
                      alt={`${service.title} logo`}
                    />
                  </div>
                  <p>{service.description}</p>
                  <ul className="product-features">
                    {service.features.map((feature: string) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a className="product-cta" href={`/${locale}${service.link}`}>
                    Descoperă {service.title}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            <SectionIcon name="transport" /> {labels.developmentTitle}
          </h2>
          <div className="feature-grid">
            {content.industries.map((industry) => (
              <article className="feature-card" key={industry.title}>
                <div className="feature-icon">
                  <SectionIcon name={industry.title.toLowerCase()} />
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            <SectionIcon name="infrastructure" /> {labels.infrastructureTitle}
          </h2>
          <div className="feature-grid">
            {content.infrastructure.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-icon">
                  <SectionIcon name={item.title.toLowerCase()} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            <SectionIcon name="advantages" /> {labels.advantagesTitle}
          </h2>
          <div className="feature-grid">
            {content.advantages.map((advantage) => (
              <article className="feature-card" key={advantage.title}>
                <div className="feature-icon">
                  <SectionIcon name={advantage.title.toLowerCase()} />
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{labels.partnersTitle}</h2>
          <p className="section-lead">{labels.partnersSubtitle}</p>
          <div className="partners-strip">
            {partners.map((partner) => {
              const logo =
                typeof partner.logo === "string"
                  ? partner.logo
                  : partner.logo
                  ? urlFor(partner.logo).width(160).url()
                  : "/logo-blue.png";

              return (
                <div className="partner-logo" key={partner.id || partner.name}>
                  <img src={logo} alt={partner.name || "Partner logo"} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block primary">
        <div className="container cta">
          <h2 className="section-title">{labels.ctaTitle}</h2>
          <p className="section-lead">{labels.ctaLead}</p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {labels.ctaPrimary}
            </a>
            <a className="secondary" href={`/${locale}/servicii`}>
              {labels.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
