import { getArticleBySlug, getArticles } from "../../../lib/sanity-queries";
import { articlesContent } from "../../../lib/content";
import { getLocale } from "../../../lib/locale";
import { renderBody } from "../../../lib/render-body";
import { getMediaURL } from "../../../lib/media";
import { ArrowRight, Calendar, Mail, Share2, User2 } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const articles = await getArticles("ro");
    const slugs = articles.map((article) => article.slug).filter(Boolean);
    return ["en", "ro"].flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
  } catch {
    const slugs = articlesContent.map((article) => article.slug).filter(Boolean);
    return ["en", "ro"].flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
  }
}

const formatDate = (value?: string, locale?: string) => {
  if (!value) return "";
  const date = new Date(value);
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);
};

const renderBlocks = (blocks: any[]) =>
  blocks.map((block, index) => {
    if (block._type !== "block") return null;
    const text = (block.children || [])
      .map((child: any) => child.text)
      .join("");
    if (!text) return null;
    if (block.style === "h2") {
      return (
        <h2 className="article-subtitle" key={`h2-${index}`}>
          {text}
        </h2>
      );
    }
    if (block.style === "h3") {
      return (
        <h3 className="article-subtitle" key={`h3-${index}`}>
          {text}
        </h3>
      );
    }
    return (
      <p className="article-paragraph" key={`p-${index}`}>
        {text}
      </p>
    );
  });

const extractHeadings = (blocks: any[]) =>
  blocks
    .filter((block) => block._type === "block" && ["h2", "h3"].includes(block.style))
    .map((block: any) =>
      (block.children || []).map((child: any) => child.text).join("")
    )
    .filter(Boolean);

const editorialCopy = {
  en: {
    meta: "Article",
    lead: "A focused take on urban mobility.",
    highlights: [
      {
        title: "Operational lens",
        desc: "What this means for day-to-day operations."
      },
      {
        title: "Passenger impact",
        desc: "How decisions affect the rider experience."
      },
      {
        title: "Strategic value",
        desc: "Why the insight matters for city planning."
      }
    ],
    sideTitle: "Quick takeaways"
  },
  ro: {
    meta: "Articol",
    lead: "O perspectivă concentrată asupra mobilității urbane.",
    highlights: [
      {
        title: "Lentilă operațională",
        desc: "Ce înseamnă asta pentru activitatea zilnică."
      },
      {
        title: "Impact asupra pasagerilor",
        desc: "Cum se schimbă experiența la nivel de călător."
      },
      {
        title: "Valoare strategică",
        desc: "De ce contează pentru planificarea orașului."
      }
    ],
    sideTitle: "Idei cheie"
  }
};

export default async function ArticleDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  const locale = getLocale({ lang: lang });
  let article = null;
  let allArticles = [];

  try {
    article = await getArticleBySlug(slug, locale);
    allArticles = await getArticles(locale);
  } catch {
    article = articlesContent.find((entry) => entry.slug === slug) || null;
    allArticles = articlesContent;
  }

  if (!article) {
    return (
      <main>
        <section className="section-block">
          <div className="container">
            <h1 className="section-title">
              {locale === "ro" ? "Articolul nu a fost găsit" : "Article not found"}
            </h1>
          </div>
        </section>
      </main>
    );
  }

  const related = allArticles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);
  const heroImage = getMediaURL(article.image, "/blog/blog-1.webp");
  const tags = article.tags?.length ? article.tags : ["Public Transport", "ITS"];
  const blocks = Array.isArray(article.content) ? article.content : [];
  const headings = extractHeadings(blocks);
  const t = editorialCopy[locale];
  const excerpt = article.excerpt || (locale === "ro" ? "Perspective din proiectele RADCOM." : "Insights from RADCOM projects.");

  return (
    <main>
      <section className="article-hero">
        <img src={heroImage} alt={article.title} loading="lazy" decoding="async" />
        <div className="article-hero-overlay">
          <div className="container">
            <div className="blog-card-tags">
              {tags.map((tag: string, index: number) => (
                <span key={`${tag}-${index}`}>{tag}</span>
              ))}
            </div>
            <h1>{article.title}</h1>
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
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container editorial-grid" style={{ marginBottom: 32 }}>
          <div>
            <div className="editorial-meta">
              {t.meta}
              <span />
              {t.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {excerpt}
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
                {tags.map((tag: string, index: number) => (
                  <li key={`${tag}-${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="container article-layout">
          <article className="article-content">
            {Array.isArray(article.content)
              ? renderBlocks(article.content)
              : renderBody(article.content || "")}
          </article>
          <aside className="article-sidebar">
            {headings.length ? (
              <div className="article-card">
                <h3>{locale === "ro" ? "Cuprins" : "Contents"}</h3>
                <ul>
                  {headings.map((heading) => (
                    <li key={heading}>{heading}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="article-card">
              <h3>
                {locale === "ro" ? "Cere o ofertă personalizată" : "Request a tailored discussion"}
              </h3>
              <p>
                {locale === "ro"
                  ? "Spune-ne despre proiectul tău și revenim cu o propunere clară."
                  : "Tell us about your project and we’ll return with a clear proposal."}
              </p>
              <a className="primary" href={`/${locale}/contact`}>
                {locale === "ro" ? "Contactează-ne" : "Contact us"}
              </a>
            </div>
            <div className="article-card">
              <h3>{locale === "ro" ? "Despre autor" : "About the author"}</h3>
              <p>{article.author || "RADCOM Team"}</p>
              <button type="button" className="secondary">
                <Mail size={16} strokeWidth={1.6} />
                {locale === "ro" ? "Scrie-ne" : "Email us"}
              </button>
            </div>
            <div className="article-card">
              <h3>{locale === "ro" ? "Distribuie" : "Share"}</h3>
              <button type="button" className="secondary">
                <Share2 size={16} strokeWidth={1.6} />
                {locale === "ro" ? "Share" : "Share"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section-block alt">
          <div className="container">
            <h2 className="section-title">
              {locale === "ro" ? "Citește și alte articole" : "Read more articles"}
            </h2>
            <div className="blog-grid">
              {related.map((item, index) => (
                <article className="blog-card" key={item.id || item.slug}>
                  <a className="blog-card-media" href={`/${locale}/articole/${item.slug}`}>
                    <img
                      src={getMediaURL(item.image, `/blog/blog-${(index % 3) + 1}.webp`)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <div className="blog-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <a className="blog-card-link" href={`/${locale}/articole/${item.slug}`}>
                      {locale === "ro" ? "Citește tot" : "Read more"}
                      <ArrowRight size={16} strokeWidth={1.8} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
