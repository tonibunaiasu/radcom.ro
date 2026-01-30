import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";

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

export default async function OptiFarePage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const copy = getCopy(locale);
  const product = copy.products.optifare;
  const productPage = copy.products.optifarePage;

  const features = [
    {
      title: productPage.features.contactlessPayment,
      desc: productPage.features.contactlessPaymentDesc
    },
    {
      title: productPage.features.smartCards,
      desc: productPage.features.smartCardsDesc
    },
    {
      title: productPage.features.qrCodes,
      desc: productPage.features.qrCodesDesc
    },
    {
      title: productPage.features.realTimeReporting,
      desc: productPage.features.realTimeReportingDesc
    },
    {
      title: productPage.features.robustHardware,
      desc: productPage.features.robustHardwareDesc
    },
    {
      title: productPage.features.passengerInterface,
      desc: productPage.features.passengerInterfaceDesc
    }
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

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <img
            className="service-hero-logo"
            src="/products/OptiFare.svg"
            alt="RADCOM OptiFare logo"
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
          <h2 className="section-title">E-Check / EMV Validators</h2>
          <div className="two-col">
            <div className="card">
              <h3>{locale === "ro" ? "Caracteristici validatoare" : "Validator features"}</h3>
              <ul className="bullets">
                {validatorFeatures[locale].map((item) => (
                  <li key={item}>{item}</li>
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
            {paymentMethods.map((method) => (
              <div className="card" key={method.title}>
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
            {benefits[locale].map((benefit) => (
              <article className="feature-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block accent">
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
