import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { companyContent } from "../../../lib/company-history";

const labels = {
  en: {
    meta: "Certifications",
    lead: "Standards that support trust and quality.",
    highlights: [
      {
        title: "Quality assured",
        desc: "Operational excellence backed by ISO standards."
      },
      {
        title: "Security first",
        desc: "Information security validated through audits."
      },
      {
        title: "Industry ready",
        desc: "Professional certifications across teams."
      }
    ],
    sideTitle: "Our commitment",
    sideItems: ["Quality", "Security", "Compliance", "Continuous training"]
  },
  ro: {
    meta: "Certificări",
    lead: "Standarde care susțin încrederea și calitatea.",
    highlights: [
      {
        title: "Calitate garantată",
        desc: "Excelență operațională certificată ISO."
      },
      {
        title: "Securitate înainte de toate",
        desc: "Securitate informațională validată prin audit."
      },
      {
        title: "Echipă certificată",
        desc: "Certificări profesionale la nivel de echipă."
      }
    ],
    sideTitle: "Angajament",
    sideItems: ["Calitate", "Securitate", "Conformitate", "Training continuu"]
  }
};

const certificationLogos = [
  { src: "/cert-logos/certrom.webp", alt: "CertRom" },
  { src: "/cert-logos/itil-prj.webp", alt: "ITIL" },
  { src: "/cert-logos/pmp.webp", alt: "PMP" },
  { src: "/cert-logos/pmi-acp.webp", alt: "PMI-ACP" },
  { src: "/cert-logos/csm.webp", alt: "CSM" },
  { src: "/cert-logos/bcs.webp", alt: "BCS" },
  { src: "/cert-logos/oracle.webp", alt: "Oracle" },
  { src: "/cert-logos/oracledb.webp", alt: "Oracle DB" },
  { src: "/cert-logos/spring.webp", alt: "Spring" },
  { src: "/cert-logos/cisco1.webp", alt: "Cisco" },
  { src: "/cert-logos/cisco2.webp", alt: "Cisco" },
  { src: "/cert-logos/cisco3.webp", alt: "Cisco" },
  { src: "/cert-logos/cisco4.webp", alt: "Cisco" },
  { src: "/cert-logos/cisco5.webp", alt: "Cisco" },
  { src: "/cert-logos/linux1.webp", alt: "Linux" },
  { src: "/cert-logos/linux2.webp", alt: "Linux" },
  { src: "/cert-logos/linux3.webp", alt: "Linux" },
  { src: "/cert-logos/COR242401_ro.webp", alt: "COR 242401" },
  { src: "/cert-logos/COR242213_ro.webp", alt: "COR 242213" },
  { src: "/cert-logos/COR242101_ro.webp", alt: "COR 242101" },
  { src: "/cert-logos/COR241263_ro.webp", alt: "COR 241263" },
  { src: "/cert-logos/COR214946_ro.webp", alt: "COR 214946" }
];

export default async function CertificariPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-certificari", locale);
  const page = (await getPage("compania-certificari", locale)) || fallback;
  const t = labels[locale] || labels.ro;
  const content = companyContent[locale] || companyContent.ro;
  return (
    <main>
      <section
        className="section-block primary hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.85), rgba(15,33,58,0.45)), url(/hero/company.webp)"
        }}
      >
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>
      <section className="section-block">
        <div className="container editorial-grid">
          <div>
            <div className="editorial-meta">
              {t.meta}
              <span />
              {t.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {page.summary}
            </h2>
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
        <div className="container" style={{ marginTop: 32 }}>
          <div className="grid grid-3">
            {content.certifications.map((certification) => (
              <div className="card" key={certification}>
                <p>{certification}</p>
              </div>
            ))}
          </div>
          <div className="cert-logos">
            {certificationLogos.map((logo) => (
              <div className="cert-logo-card" key={logo.src}>
                <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
