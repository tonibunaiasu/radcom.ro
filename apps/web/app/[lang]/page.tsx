import { getHomeContent, getPartners, getServices } from "../lib/sanity-queries";
import { SectionIcon } from "../components/SectionIcon";
import { FeatureList } from "../components/FeatureList";
import { Reveal } from "../components/Reveal";
import { getLocale } from "../lib/locale";
import { getHomeLabels } from "../lib/site-copy";
import { getMediaURL } from "../lib/media";
import { HeroVideo } from "../components/HeroVideo";
import {
  BarChart3,
  Bus,
  Cable,
  Code2,
  Cog,
  Globe2,
  HeartPulse,
  Landmark,
  Layout,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Zap
} from "lucide-react";

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
  const industryIcons = [
    <Bus key="bus" size={22} strokeWidth={1.6} />,
    <HeartPulse key="medical" size={22} strokeWidth={1.6} />,
    <RadioTower key="telecom" size={22} strokeWidth={1.6} />,
    <Smartphone key="media" size={22} strokeWidth={1.6} />,
    <Globe2 key="internet" size={22} strokeWidth={1.6} />,
    <Landmark key="eu" size={22} strokeWidth={1.6} />
  ];
  const infrastructureIcons = [
    <RadioTower key="net" size={22} strokeWidth={1.6} />,
    <Zap key="power" size={22} strokeWidth={1.6} />,
    <Cable key="fiber" size={22} strokeWidth={1.6} />,
    <Landmark key="civil" size={22} strokeWidth={1.6} />,
    <Cog key="scada" size={22} strokeWidth={1.6} />,
    <Globe2 key="eu" size={22} strokeWidth={1.6} />
  ];
  const advantageIcons = [
    <BarChart3 key="responsive" size={22} strokeWidth={1.6} />,
    <Cog key="custom" size={22} strokeWidth={1.6} />,
    <Layout key="ui" size={22} strokeWidth={1.6} />,
    <Code2 key="code" size={22} strokeWidth={1.6} />
  ];
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
          <h2 className="section-title">
            <SectionIcon name="transport" /> {labels.developmentTitle}
          </h2>
          <div className="feature-grid">
            {content.industries.map((industry, index) => (
              <Reveal key={`${industry.title}-${index}`}>
                <article className="feature-card has-icon">
                  <span className="feature-icon" aria-hidden="true">
                    {industryIcons[index % industryIcons.length]}
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
                    {infrastructureIcons[index % infrastructureIcons.length]}
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
          <h2 className="section-title">
            <SectionIcon name="advantages" /> {labels.advantagesTitle}
          </h2>
          <div className="feature-grid">
            {content.advantages.map((advantage, index) => (
              <Reveal key={`${advantage.title}-${index}`}>
                <article className="feature-card has-icon">
                  <span className="feature-icon" aria-hidden="true">
                    {advantageIcons[index % advantageIcons.length]}
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
            <iframe
              src="https://www.juicer.io/api/feeds/radcom-romania/iframe"
              title="RADCOM LinkedIn feed"
              width="100%"
              height="420"
              style={{ border: "0", display: "block" }}
              loading="lazy"
              scrolling="no"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
