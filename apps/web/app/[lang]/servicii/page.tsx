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
