import { getArticles, getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { getMediaURL } from "../../lib/media";
import { ArrowRight, Calendar, User2 } from "lucide-react";
import type { Metadata } from "next";

const labels = {
  en: {
    noArticles: "No articles available yet.",
    ctaTitle: "Request a tailored discussion",
    ctaBody: "Tell us about your project and we’ll come back with a clear proposal.",
    ctaPrimary: "Request a discussion",
    ctaSecondary: "Book 45 min consult",
    meta: "Insights",
    lead: "Thoughts on transport technology and urban mobility.",
    highlights: [
      {
        title: "Operational reality",
        desc: "What operators face every day, translated into technology."
      },
      {
        title: "Passenger experience",
        desc: "Design choices that improve journeys and trust."
      },
      {
        title: "Future-ready systems",
        desc: "Trends shaping the next generation of ITS."
      }
    ],
    sideTitle: "Topics we cover",
    sideItems: ["ITS", "E-ticketing", "Passenger info", "Fleet management"]
  },
  ro: {
    noArticles: "Nu există articole disponibile momentan.",
    ctaTitle: "Cere o ofertă personalizată",
    ctaBody: "Spune-ne despre proiectul tău și revenim cu o propunere clară, rapidă.",
    ctaPrimary: "Cere o ofertă",
    ctaSecondary: "Consultanță 45 min",
    meta: "Perspective",
    lead: "Idei despre tehnologie pentru transporturi și mobilitate urbană.",
    highlights: [
      {
        title: "Realitatea operațională",
        desc: "Ce trăiesc operatorii zilnic, transpus în tehnologie."
      },
      {
        title: "Experiența pasagerilor",
        desc: "Decizii de design care cresc încrederea."
      },
      {
        title: "Sisteme pregătite de viitor",
        desc: "Tendințe care vor modela ITS-ul următor."
      }
    ],
    sideTitle: "Subiecte",
    sideItems: ["ITS", "E-ticketing", "Info pasageri", "Management flotă"]
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

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "ro" ? "ro" : "en";
  const title = locale === "ro" ? "Articole RADCOM" : "RADCOM Articles";
  const description =
    locale === "ro"
      ? "Perspective despre mobilitate urbană, ITS și transformare digitală."
      : "Insights on urban mobility, ITS, and digital transformation.";
  const image = "/blog/blog-1.webp";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function ArticolePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("articole", locale);
  const page = (await getPage("articole", locale)) || fallback;
  const articles = await getArticles(locale);
  const t = labels[locale];
  const nextSteps = {
    en: {
      eyebrow: "Keep exploring",
      title: "Continue your journey",
      lead: "Discover services, learn about RADCOM, or reach out.",
      cards: [
        {
          title: "Services",
          desc: "See the full RADCOM platform.",
          href: "/servicii"
        },
        {
          title: "About RADCOM",
          desc: "Mission, team, and certifications.",
          href: "/compania"
        },
        {
          title: "Contact",
          desc: "Talk to us about your project.",
          href: "/contact"
        }
      ]
    },
    ro: {
      eyebrow: "Continuă explorarea",
      title: "Următorii pași",
      lead: "Descoperă servicii, află despre RADCOM sau contactează-ne.",
      cards: [
        {
          title: "Servicii",
          desc: "Vezi platforma RADCOM.",
          href: "/servicii"
        },
        {
          title: "Despre RADCOM",
          desc: "Misiune, echipă și certificări.",
          href: "/compania"
        },
        {
          title: "Contact",
          desc: "Discutăm despre proiectul tău.",
          href: "/contact"
        }
      ]
    }
  }[locale];

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
          <div className="editorial-grid" style={{ marginBottom: 28 }}>
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

      <section className="section-block alt">
        <div className="container">
          <p className="eyebrow">{nextSteps.eyebrow}</p>
          <h2 className="section-title">{nextSteps.title}</h2>
          <p className="section-lead">{nextSteps.lead}</p>
          <div className="feature-grid" style={{ marginTop: 24 }}>
            {nextSteps.cards.map((card) => (
              <a className="feature-card" key={card.title} href={`/${locale}${card.href}`}>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
