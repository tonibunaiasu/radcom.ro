import { getArticles, getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { getMediaURL } from "../../lib/media";
import { ArrowRight, Calendar, User2 } from "lucide-react";

const labels = {
  en: {
    noArticles: "No articles available yet.",
    ctaTitle: "Request a tailored discussion",
    ctaBody: "Tell us about your project and we’ll come back with a clear proposal.",
    ctaPrimary: "Request a discussion",
    ctaSecondary: "Book 45 min consult"
  },
  ro: {
    noArticles: "Nu există articole disponibile momentan.",
    ctaTitle: "Cere o ofertă personalizată",
    ctaBody: "Spune-ne despre proiectul tău și revenim cu o propunere clară, rapidă.",
    ctaPrimary: "Cere o ofertă",
    ctaSecondary: "Consultanță 45 min"
  }
};

const fallbackTags = [
  ["Public Transport", "ITS"],
  ["E-ticketing", "Payments"],
  ["Passenger Info", "Operations"]
];

const formatDate = (value?: string, locale?: string) => {
  if (!value) return "";
  const date = new Date(value);
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
};

export default async function ArticolePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("articole", locale);
  const page = (await getPage("articole", locale)) || fallback;
  const articles = await getArticles(locale);
  const t = labels[locale];

  const titleParts = page.title.trim().split(" ");
  const titleMain =
    titleParts.length > 1 ? titleParts.slice(0, -1).join(" ") : page.title;
  const titleAccent = titleParts.length > 1 ? titleParts[titleParts.length - 1] : "";

  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <p className="eyebrow">{locale === "ro" ? "Jurnal RADCOM" : "RADCOM Journal"}</p>
          <h1 className="blog-hero-title">
            {titleMain} {titleAccent ? <span>{titleAccent}</span> : null}
          </h1>
          <p className="blog-hero-subtitle">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="blog-cta">
            <div>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaBody}</p>
            </div>
            <div className="blog-cta-actions">
              <a className="primary" href={`/${locale}/contact`}>
                {t.ctaPrimary}
              </a>
              <a className="secondary" href={`/${locale}/contact`}>
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {articles.length ? (
            <div className="blog-grid">
              {articles.map((article, index) => {
                const tags = article.tags?.length
                  ? article.tags
                  : fallbackTags[index % fallbackTags.length];
                const image =
                  getMediaURL(article.image, `/blog/blog-${(index % 3) + 1}.webp`);
                return (
                  <article className="blog-card" key={article.id}>
                    <a className="blog-card-media" href={`/${locale}/articole/${article.slug}`}>
                      <img src={image} alt={article.title} loading="lazy" decoding="async" />
                      <div className="blog-card-tags">
                        {tags.map((tag: string, index: number) => (
                          <span key={`${tag}-${index}`}>{tag}</span>
                        ))}
                      </div>
                    </a>
                    <div className="blog-card-body">
                      <div className="blog-meta">
                        <span>
                          <Calendar size={16} strokeWidth={1.5} />
                          {formatDate(article.publishedAt, locale)}
                        </span>
                        <span>
                          <User2 size={16} strokeWidth={1.5} />
                          {article.author || "RADCOM Team"}
                        </span>
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                      <a className="blog-card-link" href={`/${locale}/articole/${article.slug}`}>
                        {locale === "ro" ? "Citește tot" : "Read more"}
                        <ArrowRight size={16} strokeWidth={1.8} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="section-lead">{t.noArticles}</p>
          )}
        </div>
      </section>
    </main>
  );
}
