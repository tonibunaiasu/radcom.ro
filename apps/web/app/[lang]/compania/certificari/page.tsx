import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { SubNav } from "../../../components/SubNav";
import { companyContent } from "../../../lib/company-history";

const labels = {
  en: {
    title: "Certifications"
  },
  ro: {
    title: "Certificări"
  }
};

const certificationLogos = [
  { src: "/cert-logos/certrom.png", alt: "CertRom" },
  { src: "/cert-logos/itil-prj.jpg", alt: "ITIL" },
  { src: "/cert-logos/pmp.jpg", alt: "PMP" },
  { src: "/cert-logos/pmi-acp.jpg", alt: "PMI-ACP" },
  { src: "/cert-logos/csm.jpg", alt: "CSM" },
  { src: "/cert-logos/bcs.jpg", alt: "BCS" },
  { src: "/cert-logos/oracle.jpg", alt: "Oracle" },
  { src: "/cert-logos/oracledb.jpg", alt: "Oracle DB" },
  { src: "/cert-logos/spring.jpg", alt: "Spring" },
  { src: "/cert-logos/cisco1.png", alt: "Cisco" },
  { src: "/cert-logos/cisco2.png", alt: "Cisco" },
  { src: "/cert-logos/cisco3.png", alt: "Cisco" },
  { src: "/cert-logos/cisco4.png", alt: "Cisco" },
  { src: "/cert-logos/cisco5.png", alt: "Cisco" },
  { src: "/cert-logos/linux1.png", alt: "Linux" },
  { src: "/cert-logos/linux2.png", alt: "Linux" },
  { src: "/cert-logos/linux3.png", alt: "Linux" },
  { src: "/cert-logos/COR242401_ro.jpg", alt: "COR 242401" },
  { src: "/cert-logos/COR242213_ro.jpg", alt: "COR 242213" },
  { src: "/cert-logos/COR242101_ro.jpg", alt: "COR 242101" },
  { src: "/cert-logos/COR241263_ro.jpg", alt: "COR 241263" },
  { src: "/cert-logos/COR214946_ro.jpg", alt: "COR 214946" }
];

export default async function CertificariPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-certificari", locale);
  const page = (await getPage("compania-certificari", locale)) || fallback;
  const t = labels[locale] || labels.ro;
  const content = companyContent[locale] || companyContent.ro;
  const subnavItems = [
    { label: locale === "ro" ? "Despre" : "About", href: "/compania/despre" },
    { label: locale === "ro" ? "Echipă" : "Team", href: "/compania/echipa" },
    { label: locale === "ro" ? "Certificări" : "Certifications", href: "/compania/certificari" }
  ];

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
      <SubNav items={subnavItems} />

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">{t.title}</h2>
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
