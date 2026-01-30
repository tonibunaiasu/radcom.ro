import { getArticles, getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";

const labels = {
  en: {
    noArticles: "No articles available yet."
  },
  ro: {
    noArticles: "Nu există articole disponibile momentan."
  }
};

export default async function ArticolePage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const fallback = getPageFallback("articole", locale);
  const page = (await getPage("articole", locale)) || fallback;
  const articles = await getArticles(locale);
  const t = labels[locale];

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          {articles.length ? (
            <div className="grid">
              {articles.map((article) => (
                <article key={article.id} className="card">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <p className="meta">{article.publishedAt}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="section-lead">{t.noArticles}</p>
          )}
        </div>
      </section>
    </main>
  );
}
