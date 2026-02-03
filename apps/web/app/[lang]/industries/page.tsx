import { getLocale } from "../../lib/locale";
import { getSolutions } from "../../lib/sanity-queries";
import { getCopy } from "../../lib/site-copy";
import { Building2, HeartPulse, RadioTower, Smartphone, Globe2 } from "lucide-react";
import { SubNav } from "../../components/SubNav";

export default async function SolutiiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const solutions = await getSolutions(locale);
  const subnavItems = [
    { label: locale === "ro" ? "Transport" : "Transport", href: "/industries/transport" },
    { label: locale === "ro" ? "Medical" : "Medical", href: "/industries/medical" },
    { label: locale === "ro" ? "Telecom" : "Telecom", href: "/industries/telecom" },
    { label: locale === "ro" ? "Media & Mobile" : "Media & Mobile", href: "/industries/media-mobile" },
    { label: locale === "ro" ? "Internet" : "Internet", href: "/industries/internet" }
  ];
  const iconMap: Record<string, JSX.Element> = {
    transport: <Building2 size={22} strokeWidth={1.6} />,
    medical: <HeartPulse size={22} strokeWidth={1.6} />,
    telecom: <RadioTower size={22} strokeWidth={1.6} />,
    "media-mobile": <Smartphone size={22} strokeWidth={1.6} />,
    internet: <Globe2 size={22} strokeWidth={1.6} />
  };

  return (
    <main>
      <section
        className="section-block primary hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.85), rgba(15,33,58,0.45)), url(/hero/industries.webp)"
        }}
      >
        <div className="container">
          <h1 className="section-title">{copy.solutions.title}</h1>
          <p className="section-lead">
            {locale === "ro"
              ? "Soluțiile sunt organizate pe industrii și scenarii. Pentru platformele RADCOM (iFleet, OptiFare, eXact), vezi Servicii."
              : "Solutions are organized by industry and use case. For RADCOM platforms (iFleet, OptiFare, eXact), see Services."}
          </p>
          <a className="product-cta" href={`/${locale}/servicii`}>
            {locale === "ro" ? "Vezi Serviciile" : "View Services"}
          </a>
        </div>
      </section>
      <SubNav items={subnavItems} />

      <section className="section-block">
        <div className="container">
          <div className="feature-grid">
            {solutions.map((solution: any) => (
              <article className="feature-card has-icon" key={solution.slug}>
                <span className="feature-icon" aria-hidden="true">
                  {iconMap[solution.slug] || <Globe2 size={22} strokeWidth={1.6} />}
                </span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a className="product-cta" href={`/${locale}/industries/${solution.slug}`}>
                  {locale === "ro" ? "Vezi detalii" : "View details"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
