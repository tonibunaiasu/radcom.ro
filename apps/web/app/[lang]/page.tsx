import { getHomeContent, getPartners, getServices } from "../lib/sanity-queries";
import { SectionIcon } from "../components/SectionIcon";
import { FeatureList } from "../components/FeatureList";
import { Reveal } from "../components/Reveal";
import { getLocale } from "../lib/locale";
import { getHomeLabels } from "../lib/site-copy";
import { getMediaURL } from "../lib/media";
import { HeroVideo } from "../components/HeroVideo";
import { LinkedInFeed } from "../components/LinkedInFeed";
import { FeatureIcon } from "../components/FeatureIcon";

const productLogos: Record<string, string> = {
  ifleet: "/products/iFleet.svg",
  optifare: "/products/OptiFare.svg",
  exact: "/products/eXact.svg"
};

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const content = await getHomeContent(locale);
  const services = await getServices(locale);
  const partners = await getPartners();
  const labels = getHomeLabels(locale);
  const industryIcons = ["bus", "medical", "telecom", "media", "internet", "eu"] as const;
  const infrastructureIcons = ["net", "power", "fiber", "civil", "scada", "eu"] as const;
  const advantageIcons = ["responsive", "custom", "ui", "code"] as const;
  const linkedInCopy = {
    title: locale === "ro" ? "Noutăți LinkedIn" : "LinkedIn updates",
    lead:
      locale === "ro"
        ? "Ultimele postări RADCOM, direct din LinkedIn."
        : "Latest RADCOM posts, straight from LinkedIn."
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-media hero-media-full">
          <HeroVideo
            className="hero-video"
            src="/hero-transport.mp4"
            poster="/hero-transport.webp"
          />
          <div className="hero-media-overlay" />
          <div className="hero-title-overlay">
            <div className="container hero-inner hero-title-inner">
              <div>
                <h1>{content.hero.title}</h1>
              </div>
            </div>
          </div>
          <div className="hero-content-overlay">
            <div className="container hero-inner">
              <div>
                <p>{content.hero.subtitle}</p>
                <div className="hero-actions">
                  <a className="primary" href={`/${locale}/servicii`}>
                    {content.hero.ctaPrimary}
                  </a>
                  <a className="secondary" href={`/${locale}/contact`}>
                    {content.hero.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="hero-metrics">
                <div className="hero-metrics-header">
                  <p className="eyebrow small">{labels.keyMetrics}</p>
                </div>
                <div className="hero-metrics-track">
                  {content.stats.map((stat, index) => (
                    <div className="metric-chip" key={`${stat.label}-${stat.value}-${index}`}>
                      <span className="metric-value">{stat.value}</span>
                      <span className="metric-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <Reveal key={service.id}>
                <article className="product-card">
                  <div className={`product-header ${service.tone}`}>
                    <h3>{service.title}</h3>
                    <p>{service.subtitle}</p>
                  </div>
                  <div className="product-content">
                    <div className="product-icon">
                      <img
                        src={productLogos[service.id] || "/logo-blue.png"}
                        alt={`${service.title} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p>{service.description}</p>
                    <FeatureList items={service.features} />
                    <a className="product-cta" href={`/${locale}${service.link}`}>
                      {labels.serviceCta} {service.title}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="usecase-strip">
            <div>
              <p className="eyebrow">{locale === "ro" ? "Pentru operatori" : "For operators"}</p>
              <h3>{locale === "ro" ? "Operatori municipali" : "Municipal operators"}</h3>
              <p>
                {locale === "ro"
                  ? "Sisteme integrate pentru flote mari și operațiuni zilnice."
                  : "Integrated systems for large fleets and daily operations."}
              </p>
            </div>
            <div>
              <p className="eyebrow">{locale === "ro" ? "Pentru rețele" : "For networks"}</p>
              <h3>{locale === "ro" ? "Metro & rail" : "Metro & rail"}</h3>
              <p>
                {locale === "ro"
                  ? "Platforme robuste pentru transport critic și trafic intens."
                  : "Robust platforms for critical transport and high traffic."}
              </p>
            </div>
            <div>
              <p className="eyebrow">{locale === "ro" ? "Pentru regiuni" : "For regions"}</p>
              <h3>{locale === "ro" ? "Operatori regionali" : "Regional operators"}</h3>
              <p>
                {locale === "ro"
                  ? "Implementări scalabile pentru conexiuni interurbane."
                  : "Scalable deployments for intercity connections."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            <SectionIcon name="transport" /> {labels.developmentTitle}
          </h2>
          <div className="feature-grid">
            {content.industries.map((industry, index) => (
              <Reveal key={`${industry.title}-${index}`}>
                <article className="feature-card has-icon">
                  <span className="feature-icon" aria-hidden="true">
                    <FeatureIcon name={industryIcons[index % industryIcons.length]} />
                  </span>
                  <h3>{industry.title}</h3>
                  <p>{industry.desc}</p>
                </article>
              </Reveal>
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
            {content.infrastructure.map((item, index) => (
              <Reveal key={`${item.title}-${index}`}>
                <article className="feature-card has-icon">
                  <span className="feature-icon" aria-hidden="true">
                    <FeatureIcon name={infrastructureIcons[index % infrastructureIcons.length]} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="quick-steps">
            <div>
              <p className="eyebrow">{locale === "ro" ? "Primii pași" : "First steps"}</p>
              <h3>{locale === "ro" ? "Spune-ne despre proiectul tău" : "Tell us about your project"}</h3>
              <p>
                {locale === "ro"
                  ? "Stabilim rapid obiectivele, bugetul și pașii următori."
                  : "We align on goals, budget, and next steps quickly."}
              </p>
            </div>
            <div className="quick-steps-actions">
              <a className="primary" href={`/${locale}/contact`}>
                {locale === "ro" ? "Contactează-ne" : "Contact us"}
              </a>
              <a className="secondary" href={`/${locale}/servicii`}>
                {locale === "ro" ? "Vezi serviciile" : "See services"}
              </a>
              <a className="ghost" href={`/${locale}/compania`}>
                {locale === "ro" ? "Despre RADCOM" : "About RADCOM"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            <SectionIcon name="advantages" /> {labels.advantagesTitle}
          </h2>
          <div className="feature-grid">
            {content.advantages.map((advantage, index) => (
              <Reveal key={`${advantage.title}-${index}`}>
                <article className="feature-card has-icon">
                  <span className="feature-icon" aria-hidden="true">
                    <FeatureIcon name={advantageIcons[index % advantageIcons.length]} />
                  </span>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">{labels.partnersTitle}</h2>
          <p className="section-lead">{labels.partnersSubtitle}</p>
          <Reveal>
            <div className="partners-marquee">
              <div className="partners-track">
                {[...partners, ...partners].map((partner, index) => {
                const logo = getMediaURL(partner.logo, "/logo-blue.png");

                  return (
                    <div
                      className="partner-logo"
                      key={`${partner.id || partner.name}-${index}`}
                    >
                      <img
                        src={logo}
                        alt={partner.name || "Partner logo"}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Ce spun partenerii" : "What partners say"}
          </h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>
                {locale === "ro"
                  ? "„Integrarea hardware + software a redus timpii de implementare și ne-a dat vizibilitate în timp real.”"
                  : "“Hardware + software integration reduced rollout time and gave us real-time visibility.”"}
              </p>
              <span>
                {locale === "ro" ? "Operator transport urban" : "Urban transport operator"}
              </span>
            </div>
            <div className="testimonial-card">
              <p>
                {locale === "ro"
                  ? "„Platforma RADCOM ne ajută să menținem punctualitatea și să informăm pasagerii consecvent.”"
                  : "“The RADCOM platform helps us keep punctuality and inform passengers consistently.”"}
              </p>
              <span>
                {locale === "ro" ? "Autoritate metropolitană" : "Metropolitan authority"}
              </span>
            </div>
            <div className="testimonial-card">
              <p>
                {locale === "ro"
                  ? "„Un singur partener pentru echipamente, software și suport — exact ce aveam nevoie.”"
                  : "“One partner for equipment, software, and support — exactly what we needed.”"}
              </p>
              <span>
                {locale === "ro" ? "Operator regional" : "Regional operator"}
              </span>
            </div>
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

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{linkedInCopy.title}</h2>
          <p className="section-lead">{linkedInCopy.lead}</p>
          <div className="linkedin-feed">
            <LinkedInFeed locale={locale} />
          </div>
        </div>
      </section>
    </main>
  );
}
