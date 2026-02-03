import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { SubNav } from "../../../components/SubNav";
import { BellRing, Bus, MapPin, Monitor, Radar, Route } from "lucide-react";

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

export default async function ExactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const product = copy.products.exact;
  const productPage = copy.products.exactPage;
  const features = Object.entries(productPage.features)
    .filter(([key]) => !key.endsWith("Desc"))
    .map(([key, title]) => ({
      title: String(title),
      desc: String(productPage.features[`${key}Desc` as keyof typeof productPage.features] || "")
    }));
  const featureIcons = [
    <Radar key="radar" size={22} strokeWidth={1.6} />,
    <Bus key="bus" size={22} strokeWidth={1.6} />,
    <MapPin key="pin" size={22} strokeWidth={1.6} />,
    <Route key="route" size={22} strokeWidth={1.6} />,
    <BellRing key="alert" size={22} strokeWidth={1.6} />,
    <Monitor key="screen" size={22} strokeWidth={1.6} />
  ];
  const displayIcons = [
    <Monitor key="display" size={22} strokeWidth={1.6} />,
    <Bus key="displaybus" size={22} strokeWidth={1.6} />,
    <BellRing key="displayalert" size={22} strokeWidth={1.6} />
  ];
  const benefitIcons = [
    <MapPin key="benefit1" size={22} strokeWidth={1.6} />,
    <Radar key="benefit2" size={22} strokeWidth={1.6} />,
    <Route key="benefit3" size={22} strokeWidth={1.6} />
  ];
  const subnavItems = [
    { label: "iFleet", href: "/servicii/ifleet" },
    { label: "OptiFare", href: "/servicii/optifare" },
    { label: "eXact", href: "/servicii/exact" }
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
      <section className="section-block success">
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
      <SubNav items={subnavItems} />

      <section
        className="visual-strip"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.8), rgba(15,33,58,0.4)), url(https://images.unsplash.com/photo-I7Rj5wEGlUA?auto=format&fit=crop&w=1600&q=80)"
        }}
      >
        <div className="container">
          <p>
            {locale === "ro"
              ? "Informații în timp real pentru pasageri și operatori."
              : "Real-time information for passengers and operators."}
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
            {displayTypes.map((display, index) => (
              <article className="feature-card has-icon" key={`${display.title}-${index}`}>
                <span className="feature-icon" aria-hidden="true">
                  {displayIcons[index % displayIcons.length]}
                </span>
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
