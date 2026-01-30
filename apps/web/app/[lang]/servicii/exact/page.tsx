import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";

const benefits = {
  en: [
    {
      title: "Informed passengers",
      desc: "Accurate real-time information reduces uncertainty and improves satisfaction."
    },
    {
      title: "Operational transparency",
      desc: "Clear visibility over routes, arrivals, and service disruptions."
    },
    {
      title: "Multichannel communication",
      desc: "LED displays, audio announcements, and digital feeds stay in sync."
    }
  ],
  ro: [
    {
      title: "Pasageri informați",
      desc: "Informații precise în timp real reduc incertitudinea și cresc satisfacția."
    },
    {
      title: "Transparență operațională",
      desc: "Vizibilitate clară asupra rutelor, sosirilor și întreruperilor de serviciu."
    },
    {
      title: "Comunicare multicanal",
      desc: "Afișaje LED, anunțuri audio și feed-uri digitale sincronizate."
    }
  ]
};

export default async function ExactPage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const copy = getCopy(locale);
  const product = copy.products.exact;
  const productPage = copy.products.exactPage;

  const features = [
    {
      title: productPage.features.routePlanning,
      desc: productPage.features.routePlanningDesc
    },
    {
      title: productPage.features.ledDisplays,
      desc: productPage.features.ledDisplaysDesc
    },
    {
      title: productPage.features.voiceAnnouncements,
      desc: productPage.features.voiceAnnouncementsDesc
    },
    {
      title: productPage.features.eta,
      desc: productPage.features.etaDesc
    },
    {
      title: productPage.features.stationDisplays,
      desc: productPage.features.stationDisplaysDesc
    },
    {
      title: productPage.features.passengerFeed,
      desc: productPage.features.passengerFeedDesc
    }
  ];

  const displayTypes = [
    {
      title: productPage.displayTypes.interior,
      desc: productPage.displayTypes.interiorDesc
    },
    {
      title: productPage.displayTypes.exterior,
      desc: productPage.displayTypes.exteriorDesc
    },
    {
      title: productPage.displayTypes.stations,
      desc: productPage.displayTypes.stationsDesc
    },
    {
      title: productPage.displayTypes.feed,
      desc: productPage.displayTypes.feedDesc
    },
    {
      title: productPage.displayTypes.publicInfo,
      desc: productPage.displayTypes.publicInfoDesc
    },
    {
      title: productPage.displayTypes.advertising,
      desc: productPage.displayTypes.advertisingDesc
    }
  ];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <img
            className="service-hero-logo"
            src="/products/eXact.svg"
            alt="RADCOM eXact logo"
          />
          <h1 className="section-title">{product.title}</h1>
          <p className="section-lead">{productPage.description}</p>
          <p className="section-lead">{productPage.detailedDescription}</p>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Funcționalități cheie" : "Key features"}
          </h2>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="badge">{feature.title}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{productPage.displayTypes.title}</h2>
          <div className="feature-grid">
            {displayTypes.map((display) => (
              <article className="feature-card" key={display.title}>
                <h3>{display.title}</h3>
                <p>{display.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Beneficii" : "Benefits"}
          </h2>
          <div className="feature-grid">
            {benefits[locale].map((benefit) => (
              <article className="feature-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block success">
        <div className="container cta">
          <h2 className="section-title">
            {locale === "ro" ? "Îmbunătățește experiența pasagerilor" : "Improve the passenger experience"}
          </h2>
          <p className="section-lead">
            {locale === "ro"
              ? "Descoperă cum RADCOM eXact aduce informații clare și rapide."
              : "Discover how RADCOM eXact delivers clear, timely information."}
          </p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {locale === "ro" ? "Solicită demonstrație" : "Request a demo"}
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
