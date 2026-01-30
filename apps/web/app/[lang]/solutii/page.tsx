import { getLocale } from "../../lib/locale";
import { getSolutions } from "../../lib/sanity-queries";
import { getCopy } from "../../lib/site-copy";

export default async function SolutiiPage({ params }: { params: { lang: string } }) {
  const locale = getLocale({ lang: params.lang });
  const copy = getCopy(locale);
  const solutions = await getSolutions(locale);

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{copy.solutions.title}</h1>
          <p className="section-lead">
            {locale === "ro"
              ? "Expertiză specializată pentru diverse sectoare de activitate."
              : "Specialized expertise for multiple industries."}
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="feature-grid">
            {solutions.map((solution: any) => (
              <article className="feature-card" key={solution.slug}>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a className="product-cta" href={`/${locale}/solutii/${solution.slug}`}>
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
