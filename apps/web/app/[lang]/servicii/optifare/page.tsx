import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { servicesBreadcrumbs, servicesLinks } from "../../../lib/services-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { partnersContent } from "../../../lib/content";
import { CreditCard, Nfc, QrCode, ShieldCheck, Smartphone, Ticket } from "lucide-react";

const editorialCopy = {
  en: {
    meta: "OptiFare",
    lead: "Smart fare collection built for modern cities.",
    microBenefits: [
      "Faster boarding",
      "Lower cash handling costs",
      "Secure revenue reporting"
    ],
    highlights: [
      {
        title: "Faster boarding",
        desc: "Contactless payments reduce dwell time."
      },
      {
        title: "Revenue clarity",
        desc: "Secure, auditable transactions and reporting."
      },
      {
        title: "Flexible journeys",
        desc: "Multiple payment methods in one system."
      }
    ],
    sideTitle: "Core outcomes",
    sideItems: ["Speed", "Security", "Compliance", "Interoperability"]
  },
  ro: {
    meta: "OptiFare",
    lead: "Taxare inteligentă pentru orașe moderne.",
    microBenefits: [
      "Îmbarcare mai rapidă",
      "Costuri mai mici cu numerarul",
      "Raportare sigură a veniturilor"
    ],
    highlights: [
      {
        title: "Îmbarcare rapidă",
        desc: "Plățile contactless reduc timpul în stație."
      },
      {
        title: "Claritate în venituri",
        desc: "Tranzacții sigure și rapoarte auditabile."
      },
      {
        title: "Călătorii flexibile",
        desc: "Mai multe metode de plată într-un singur sistem."
      }
    ],
    sideTitle: "Rezultate",
    sideItems: ["Viteză", "Securitate", "Conformitate", "Interoperabilitate"]
  }
};

const validatorSpecs = [
  { labelRo: "Ecran", labelEn: "Display", value: "7\" TFT LCD tactil capacitiv" },
  { labelRo: "Procesor", labelEn: "Processor", value: "Dual Core i.MX7 la 1GHz" },
  { labelRo: "Sistem operare", labelEn: "Operating system", value: "Linux" },
  {
    labelRo: "Carduri acceptate",
    labelEn: "Accepted cards",
    value: "VISA, MasterCard, Apple Pay, Google Pay"
  },
  {
    labelRo: "Interfață RF",
    labelEn: "RF interface",
    value: "ISO/IEC 14443 Type A/B, Mifare 13.56 MHz"
  },
  { labelRo: "SAM slots", labelEn: "SAM slots", value: "2x micro SIM" }
];

const validatorFeatures = {
  en: [
    "Robust casing with anti-vandal glass layer",
    "7\" touch display for quick interaction",
    "Receipts for payment confirmation",
    "Multilingual passenger interface",
    "Fare zone validation",
    "LED indicators for visual feedback"
  ],
  ro: [
    "Carcasă robustă, strat de sticlă anti-vandalism",
    "Ecran tactil 7\" pentru interacțiune rapidă",
    "Chitanțe pentru confirmarea plății",
    "Interfață multilingvă pentru pasageri",
    "Validare zonă tarifară",
    "LED-uri informative pentru feedback vizual"
  ]
};

const benefits = {
  en: [
    {
      title: "Lower operational costs",
      desc: "Cashless operations, reduced fraud, and automated revenue collection."
    },
    {
      title: "Passenger experience",
      desc: "Fast boarding, convenient payment, and intuitive interface."
    },
    {
      title: "Security and compliance",
      desc: "EMV standards, encrypted transactions, PCI DSS compliance."
    },
    {
      title: "Flexibility and scalability",
      desc: "Support for multiple methods and easy integration."
    }
  ],
  ro: [
    {
      title: "Reducere costuri operaționale",
      desc: "Eliminare numerar, reducere fraude, automatizare colectare venituri."
    },
    {
      title: "Experiență pasageri",
      desc: "Îmbarcare rapidă, plată convenabilă, interfață intuitivă."
    },
    {
      title: "Securitate și conformitate",
      desc: "Standard EMV, tranzacții criptate, conformitate PCI DSS."
    },
    {
      title: "Flexibilitate și scalabilitate",
      desc: "Suport pentru metode multiple și integrare ușoară."
    }
  ]
};

const nextSteps = {
  en: {
    title: "Next steps",
    items: [
      {
        title: "Explore all RADCOM solutions",
        description: "Compare OptiFare with our complementary mobility platforms.",
        href: "/servicii"
      },
      {
        title: "See real-world outcomes",
        description: "Review case studies from modern transit operators.",
        href: "/studii-de-caz"
      },
      {
        title: "Plan a technical discussion",
        description: "Tell us about your ticketing goals and deployment timeline.",
        href: "/contact"
      }
    ]
  },
  ro: {
    title: "Următorii pași",
    items: [
      {
        title: "Vezi toate soluțiile RADCOM",
        description: "Compară OptiFare cu platformele noastre complementare.",
        href: "/servicii"
      },
      {
        title: "Descoperă rezultate reale",
        description: "Studii de caz din transport public modern.",
        href: "/studii-de-caz"
      },
      {
        title: "Programează o discuție",
        description: "Spune-ne despre obiectivele de taxare și planul de implementare.",
        href: "/contact"
      }
    ]
  }
};

const proofPoints = {
  en: [
    { label: "Payment methods", value: "6+ supported" },
    { label: "Validation speed", value: "< 300 ms" },
    { label: "Compliance", value: "EMV / PCI DSS" }
  ],
  ro: [
    { label: "Metode de plată", value: "6+ suportate" },
    { label: "Timp validare", value: "< 300 ms" },
    { label: "Conformitate", value: "EMV / PCI DSS" }
  ]
};

const rolloutSteps = {
  en: [
    {
      title: "Scope & align",
      desc: "Define ticketing rules, tariffs, and payment partners."
    },
    {
      title: "Deploy validators",
      desc: "Install hardware, integrate payment flows, and test fare rules."
    },
    {
      title: "Launch & monitor",
      desc: "Train teams, monitor transactions, and optimize revenue."
    }
  ],
  ro: [
    {
      title: "Definire & aliniere",
      desc: "Stabilim reguli tarifare, tarife și parteneri de plăți."
    },
    {
      title: "Implementare validatoare",
      desc: "Instalăm hardware, integrăm plățile și testăm regulile."
    },
    {
      title: "Lansare & monitorizare",
      desc: "Training echipe, monitorizare tranzacții și optimizare venituri."
    }
  ]
};

const faqs = {
  en: [
    {
      q: "Which payment methods are supported?",
      a: "Bank cards, mobile wallets, QR codes, and Mifare cards."
    },
    {
      q: "How long does deployment take?",
      a: "Most projects go live in 8–12 weeks depending on integrations."
    },
    {
      q: "Is the system compliant?",
      a: "Yes, with EMV standards and PCI DSS best practices."
    }
  ],
  ro: [
    {
      q: "Ce metode de plată sunt suportate?",
      a: "Carduri bancare, wallet-uri mobile, QR și carduri Mifare."
    },
    {
      q: "Cât durează implementarea?",
      a: "De regulă 8–12 săptămâni în funcție de integrări."
    },
    {
      q: "Sistemul este compliant?",
      a: "Da, conform standardelor EMV și PCI DSS."
    }
  ]
};

const useCases = {
  en: [
    {
      title: "Fast boarding",
      desc: "Reduce dwell times with contactless validation."
    },
    {
      title: "Revenue control",
      desc: "Track transactions and reconcile revenue automatically."
    },
    {
      title: "Flexible fare rules",
      desc: "Support zones, time-based fares, and multimodal passes."
    }
  ],
  ro: [
    {
      title: "Îmbarcare rapidă",
      desc: "Reducem timpul în stație prin validare contactless."
    },
    {
      title: "Control venituri",
      desc: "Monitorizare tranzacții și reconciliere automată."
    },
    {
      title: "Reguli tarifare flexibile",
      desc: "Suport pentru zone, timp și abonamente multimodale."
    }
  ]
};

const relatedContent = {
  en: [
    {
      title: "Complementary: iFleet",
      desc: "Connect fare data to fleet operations.",
      href: "/servicii/ifleet"
    },
    {
      title: "Article: Fare collection future",
      desc: "Why modern ticketing drives ridership.",
      href: "/articole/fare-collection-future"
    },
    {
      title: "Case study",
      desc: "End‑to‑end ticketing rollout for a public operator.",
      href: "/studii-de-caz"
    }
  ],
  ro: [
    {
      title: "Complementar: iFleet",
      desc: "Conectează datele de taxare cu operațiunile flotei.",
      href: "/servicii/ifleet"
    },
    {
      title: "Articol: Viitorul taxării",
      desc: "De ce taxarea modernă crește adopția.",
      href: "/articole/fare-collection-future"
    },
    {
      title: "Studiu de caz",
      desc: "Implementare end‑to‑end pentru un operator public.",
      href: "/studii-de-caz"
    }
  ]
};

const miniCta = {
  en: {
    title: "Ready to modernize ticketing?",
    lead: "Share your fare model and rollout targets. We’ll propose the next steps.",
    primary: "Request a discussion",
    secondary: "See all services"
  },
  ro: {
    title: "Vrei să modernizezi taxarea?",
    lead: "Spune-ne modelul tarifar și obiectivele. Revenim cu pașii următori.",
    primary: "Solicită o discuție",
    secondary: "Vezi toate serviciile"
  }
};

export default async function OptiFarePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const product = copy.products.optifare;
  const productPage = copy.products.optifarePage;
  const e = editorialCopy[locale];
  const features = Object.entries(productPage.features)
    .filter(([key]) => !key.endsWith("Desc"))
    .map(([key, title]) => ({
      title: String(title),
      desc: String(productPage.features[`${key}Desc` as keyof typeof productPage.features] || "")
    }));
  const featureIcons = [
    <CreditCard key="card" size={22} strokeWidth={1.6} />,
    <Nfc key="nfc" size={22} strokeWidth={1.6} />,
    <Smartphone key="wallet" size={22} strokeWidth={1.6} />,
    <Ticket key="ticket" size={22} strokeWidth={1.6} />,
    <QrCode key="qr" size={22} strokeWidth={1.6} />,
    <ShieldCheck key="secure" size={22} strokeWidth={1.6} />
  ];
  const benefitIcons = [
    <ShieldCheck key="secure2" size={22} strokeWidth={1.6} />,
    <CreditCard key="fast" size={22} strokeWidth={1.6} />,
    <Smartphone key="mobile" size={22} strokeWidth={1.6} />
  ];
  const paymentMethods = [
    {
      title: productPage.paymentMethods.bankCards,
      desc: productPage.paymentMethods.bankCardsDesc
    },
    {
      title: productPage.paymentMethods.mobileWallets,
      desc: productPage.paymentMethods.mobileWalletsDesc
    },
    {
      title: productPage.paymentMethods.mifareCards,
      desc: productPage.paymentMethods.mifareCardsDesc
    },
    {
      title: productPage.paymentMethods.qrCodes,
      desc: productPage.paymentMethods.qrCodesDesc
    },
    {
      title: productPage.paymentMethods.nfcPhones,
      desc: productPage.paymentMethods.nfcPhonesDesc
    },
    {
      title: productPage.paymentMethods.paperTickets,
      desc: productPage.paymentMethods.paperTicketsDesc
    }
  ];
  const partners = partnersContent.slice(0, 6);
  const currentPath = "/servicii/optifare";
  const breadcrumbs = servicesBreadcrumbs(locale, "OptiFare");
  const quickLinks = servicesLinks[locale].filter((item) => item.href !== currentPath);

  return (
    <main>
      <section className="section-block success">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <div className="service-hero-logo service-hero-logo--optifare">
            <img
              src="/products/OptiFare.svg"
              alt="RADCOM OptiFare logo"
              loading="lazy"
              decoding="async"
            />
          </div>
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
            "linear-gradient(120deg, rgba(28,63,149,0.8), rgba(15,33,58,0.4)), url(/hero/contact-stripe.webp)"
        }}
      >
        <div className="container">
          <p>
            {locale === "ro"
              ? "Plăți contactless și validare rapidă pentru pasageri."
              : "Contactless payments and fast validation for passengers."}
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
          <h2 className="section-title">E-Check / EMV Validators</h2>
          <div className="two-col">
            <div className="card">
              <h3>{locale === "ro" ? "Caracteristici validatoare" : "Validator features"}</h3>
              <ul className="bullets">
                {validatorFeatures[locale].map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{locale === "ro" ? "Specificații tehnice" : "Technical specifications"}</h3>
              <div className="specs">
                {validatorSpecs.map((spec) => (
                  <div key={spec.labelRo}>
                    <span>{locale === "ro" ? spec.labelRo : spec.labelEn}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section" />
          <h3>{productPage.paymentMethods.title}</h3>
          <p className="section-lead">{productPage.allPaymentMethods}</p>
          <div className="grid">
            {paymentMethods.map((method, index) => (
              <div className="card" key={`${method.title}-${index}`}>
                <strong>{method.title}</strong>
                <p>{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Beneficii pentru operatori și pasageri" : "Benefits for operators and passengers"}
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

      <section className="section-block">
        <div className="container cta">
          <h2 className="section-title">{miniCta[locale].title}</h2>
          <p className="section-lead">{miniCta[locale].lead}</p>
          <div className="hero-actions">
            <a className="primary" href={`/${locale}/contact`}>
              {miniCta[locale].primary}
            </a>
            <a className="secondary" href={`/${locale}/servicii`}>
              {miniCta[locale].secondary}
            </a>
          </div>
        </div>
      </section>

      <section className="section-block alt">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Parteneri de încredere" : "Trusted partners"}
          </h2>
          <div className="partners-marquee">
            <div className="partners-track">
              {[...partners, ...partners].map((partner, index) => (
                <div className="partner-logo" key={`${partner.id}-${index}`}>
                  <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
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

      <section className="section-block success">
        <div className="container cta">
          <h2 className="section-title">
            {locale === "ro" ? "Modernizează sistemul de taxare" : "Modernize the fare system"}
          </h2>
          <p className="section-lead">
            {locale === "ro"
              ? "Descoperă cum RADCOM OptiFare reduce costurile operaționale."
              : "Discover how RADCOM OptiFare reduces operational costs."}
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
