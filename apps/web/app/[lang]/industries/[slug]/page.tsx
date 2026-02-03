import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { getSolutionBySlug, getSolutions } from "../../../lib/sanity-queries";
import { CheckCircle2 } from "lucide-react";
import { SubNav } from "../../../components/SubNav";

export async function generateStaticParams() {
  const slugs = await getSolutions("ro");
  return ["en", "ro"].flatMap((lang) =>
    slugs.map((item: any) => ({ lang, slug: item.slug }))
  );
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  const locale = getLocale({ lang: lang });
  const copy = getCopy(locale);
  const solution = await getSolutionBySlug(slug, locale);
  const productLogos: Record<string, string> = {
    ifleet: "/products/iFleet.svg",
    optifare: "/products/OptiFare.svg",
    exact: "/products/eXact.svg"
  };
  const titles = {
    transport: copy.solutions.transport,
    medical: copy.solutions.medical,
    telecom: copy.solutions.telecom,
    "media-mobile": copy.solutions.mediaMobile,
    internet: copy.solutions.internet
  } as const;
  const subnavItems = [
    { label: locale === "ro" ? "Transport" : "Transport", href: "/industries/transport" },
    { label: locale === "ro" ? "Medical" : "Medical", href: "/industries/medical" },
    { label: locale === "ro" ? "Telecom" : "Telecom", href: "/industries/telecom" },
    { label: locale === "ro" ? "Media & Mobile" : "Media & Mobile", href: "/industries/media-mobile" },
    { label: locale === "ro" ? "Internet" : "Internet", href: "/industries/internet" }
  ];

  if (!solution) {
    return (
      <main>
        <section className="section-block">
          <div className="container">
            <h1 className="section-title">
              {locale === "ro" ? "Soluția nu a fost găsită" : "Solution not found"}
            </h1>
          </div>
        </section>
      </main>
    );
  }

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
          <h1 className="section-title">{solution.title || titles[slug as keyof typeof titles]}</h1>
          <p className="section-lead">{solution.description}</p>
        </div>
      </section>
      <SubNav items={subnavItems} />

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Beneficii" : "Benefits"}
          </h2>
          <div className="feature-grid">
            {solution.benefits.map((benefit: string, index: number) => (
              <article className="feature-card has-icon" key={`${benefit}-${index}`}>
                <span className="feature-icon" aria-hidden="true">
                  <CheckCircle2 size={22} strokeWidth={1.6} />
                </span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
          <div className="section" />
          <a className="product-cta" href={`/${locale}/contact`}>
            {locale === "ro" ? "Contactează-ne" : "Contact us"}
          </a>
        </div>
      </section>

      {slug === "transport" ? (
        <section className="section-block alt">
          <div className="container">
            <h2 className="section-title">
              {locale === "ro" ? "Platforme recomandate" : "Recommended platforms"}
            </h2>
            <p className="section-lead">
              {locale === "ro"
                ? "Detaliile produselor sunt prezentate în secțiunea Servicii."
                : "Product details are available in the Services section."}
            </p>
            <div className="feature-grid solution-products">
              {[
                { id: "ifleet", title: "iFleet", desc: locale === "ro" ? "Management flotă și operare." : "Fleet management and operations.", link: "/servicii/ifleet" },
                { id: "optifare", title: "OptiFare", desc: locale === "ro" ? "E-ticketing și tarifare." : "E-ticketing and fare collection.", link: "/servicii/optifare" },
                { id: "exact", title: "eXact", desc: locale === "ro" ? "Informare pasageri și planificare rute." : "Passenger info and route planning.", link: "/servicii/exact" }
              ].map((item) => (
                <article className="feature-card" key={item.id}>
                  <div className="product-icon solution-product-logo">
                    <img src={productLogos[item.id]} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a className="product-cta" href={`/${locale}${item.link}`}>
                    {locale === "ro" ? "Vezi serviciul" : "View service"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
