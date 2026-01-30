import { getLocale } from "../../../lib/locale";
import { getCopy } from "../../../lib/site-copy";
import { getSolutionBySlug, getSolutions } from "../../../lib/sanity-queries";

export async function generateStaticParams() {
  const slugs = await getSolutions("ro");
  return ["en", "ro"].flatMap((lang) =>
    slugs.map((item: any) => ({ lang, slug: item.slug }))
  );
}

export default async function SolutionDetailPage({
  params
}: {
  params: { lang: string; slug: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const copy = getCopy(locale);
  const solution = await getSolutionBySlug(params.slug, locale);
  const titles = {
    transport: copy.solutions.transport,
    medical: copy.solutions.medical,
    telecom: copy.solutions.telecom,
    "media-mobile": copy.solutions.mediaMobile,
    internet: copy.solutions.internet
  } as const;

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
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{solution.title || titles[params.slug as keyof typeof titles]}</h1>
          <p className="section-lead">{solution.description}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <h2 className="section-title">
            {locale === "ro" ? "Beneficii" : "Benefits"}
          </h2>
          <div className="feature-grid">
            {solution.benefits.map((benefit: string) => (
              <article className="feature-card" key={benefit}>
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
    </main>
  );
}
