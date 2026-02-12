import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { servicesBreadcrumbs, servicesLinks } from "../../../lib/services-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { BellRing, Bus, MapPin, Monitor, Radar, Route } from "lucide-react";

const editorialCopy = {
  en: {
    meta: "eXact",
    lead: "Passenger information in real time.",
    microBenefits: [
      "Fewer passenger complaints",
      "Better route adherence",
      "Consistent rider updates"
    ],
    highlights: [
      {
        title: "Clarity for riders",
        desc: "Accurate arrival data builds trust."
      },
      {
        title: "Operational transparency",
        desc: "Live insights for dispatch and planning."
      },
      {
        title: "Multichannel reach",
        desc: "Displays, audio, and digital feeds in sync."
      }
    ],
    sideTitle: "Core outcomes",
    sideItems: ["Visibility", "Consistency", "Trust", "Accessibility"]
  },
  ro: {
    meta: "eXact",
    lead: "Informare pasageri în timp real.",
    microBenefits: [
      "Mai puține reclamații",
      "Respectare mai bună a rutelor",
      "Informare consecventă"
    ],
    highlights: [
      {
        title: "Claritate pentru pasageri",
        desc: "Sosiri precise construiesc încredere."
      },
      {
        title: "Transparență operațională",
        desc: "Vizibilitate live pentru dispecerat."
      },
      {
        title: "Comunicare multicanal",
        desc: "Afișaje, audio și feed-uri digitale sincronizate."
      }
    ],
    sideTitle: "Rezultate",
    sideItems: ["Vizibilitate", "Consistență", "Încredere", "Accesibilitate"]
  }
};

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

const nextSteps = {
  en: {
    title: "Next steps",
    items: [
      {
        title: "Explore all RADCOM solutions",
        description: "See how eXact connects with our broader mobility stack.",
        href: "/servicii"
      },
      {
        title: "See real-world outcomes",
        description: "Review case studies from modern transit operators.",
        href: "/studii-de-caz"
      },
      {
        title: "Plan a technical discussion",
        description: "Tell us about your passenger info goals and timelines.",
        href: "/contact"
      }
    ]
  },
  ro: {
    title: "Următorii pași",
    items: [
      {
        title: "Vezi toate soluțiile RADCOM",
        description: "Descoperă cum eXact se conectează la platformele noastre.",
        href: "/servicii"
      },
      {
        title: "Descoperă rezultate reale",
        description: "Studii de caz din transport public modern.",
        href: "/studii-de-caz"
      },
      {
        title: "Programează o discuție",
        description: "Spune-ne despre obiectivele de informare și termene.",
        href: "/contact"
      }
    ]
  }
};

const proofPoints = {
  en: [
    { label: "Display coverage", value: "Interior + station" },
    { label: "Update latency", value: "< 10 sec" },
    { label: "Multi-channel", value: "LED / Audio / API" }
  ],
  ro: [
    { label: "Acoperire afișaje", value: "Interior + stații" },
    { label: "Latență update", value: "< 10 sec" },
    { label: "Multicanal", value: "LED / Audio / API" }
  ]
};

const rolloutSteps = {
  en: [
    {
      title: "Audit & mapping",
      desc: "Define routes, stop infrastructure, and data sources."
    },
    {
      title: "Install & connect",
      desc: "Deploy displays, integrate feeds, and configure alerts."
    },
    {
      title: "Go live & iterate",
      desc: "Train teams, monitor accuracy, and improve passenger UX."
    }
  ],
  ro: [
    {
      title: "Audit & mapare",
      desc: "Definim rute, infrastructură în stații și surse de date."
    },
    {
      title: "Instalare & conectare",
      desc: "Montăm afișaje, integrăm feed‑uri și configurăm alerte."
    },
    {
      title: "Lansare & optimizare",
      desc: "Training echipe, monitorizare acuratețe și UX pasageri."
    }
  ]
};

const faqs = {
  en: [
    {
      q: "How fast are passenger updates?",
      a: "Updates typically propagate in under 10 seconds."
    },
    {
      q: "Does it work with existing displays?",
      a: "Yes, we integrate with most legacy LED and LCD systems."
    },
    {
      q: "Can we expose data to third parties?",
      a: "Yes, via secure APIs and controlled data feeds."
    }
  ],
  ro: [
    {
      q: "Cât de rapid se actualizează informațiile?",
      a: "În mod uzual sub 10 secunde."
    },
    {
      q: "Funcționează cu afișaje existente?",
      a: "Da, integrăm majoritatea sistemelor LED/LCD."
    },
    {
      q: "Putem expune date către terți?",
      a: "Da, prin API-uri și feed-uri controlate."
    }
  ]
};

const useCases = {
  en: [
    {
      title: "Passenger guidance",
      desc: "Accurate ETAs and platform updates reduce uncertainty."
    },
    {
      title: "Disruption alerts",
      desc: "Notify riders quickly when incidents occur."
    },
    {
      title: "Multi-channel reach",
      desc: "Keep web, mobile, and station displays in sync."
    }
  ],
  ro: [
    {
      title: "Ghidare pasageri",
      desc: "ETA-uri precise și actualizări în stații."
    },
    {
      title: "Alerte întreruperi",
      desc: "Informare rapidă în caz de incidente."
    },
    {
      title: "Multicanal",
      desc: "Site, mobil și afișaje sincronizate."
    }
  ]
};

const relatedContent = {
  en: [
    {
      title: "Complementary: iFleet",
      desc: "Use fleet telemetry to improve passenger updates.",
      href: "/servicii/ifleet"
    },
    {
      title: "Article: Passenger info in real time",
      desc: "Why accurate ETA communication matters.",
      href: "/articole/passenger-info-realtime"
    },
    {
      title: "Case study",
      desc: "Passenger information upgrade for a public operator.",
      href: "/studii-de-caz"
    }
  ],
  ro: [
    {
      title: "Complementar: iFleet",
      desc: "Folosește datele flotei pentru informare precisă.",
      href: "/servicii/ifleet"
    },
    {
      title: "Articol: Informare pasageri",
      desc: "De ce ETA‑urile corecte cresc încrederea.",
      href: "/articole/passenger-info-realtime"
    },
    {
      title: "Studiu de caz",
      desc: "Upgrade informare pasageri pentru un operator public.",
      href: "/studii-de-caz"
    }
  ]
};

export default async function ExactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const product = copy.products.exact;
  const productPage = copy.products.exactPage;
  const e = editorialCopy[locale];
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
  const currentPath = "/servicii/exact";
  const breadcrumbs = servicesBreadcrumbs(locale, "eXact");
  const quickLinks = servicesLinks[locale].filter((item) => item.href !== currentPath);

  return (
    <main>
      <section className="section-block neutral">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <img
            className="service-hero-logo"
            src="/products/eXact.svg"
            alt="RADCOM eXact logo"
            loading="lazy"
            decoding="async"
          />
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
            "linear-gradient(120deg, rgba(28,63,149,0.8), rgba(15,33,58,0.4)), url(/hero/company-stripe.webp)"
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

      <section className="section-block neutral">
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
