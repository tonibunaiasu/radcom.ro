import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";

const copy = {
  en: {
    meta: "Mission",
    lead: "What we build every day.",
    highlights: [
      {
        title: "Operational clarity",
        desc: "Real-time visibility that supports fast decisions."
      },
      {
        title: "Integrated delivery",
        desc: "Hardware + software that work as one system."
      },
      {
        title: "Passenger experience",
        desc: "Reliable journeys that feel consistent and simple."
      }
    ],
    sideTitle: "We deliver",
    sideItems: ["Integrated ITS", "Fare collection", "Fleet intelligence", "Passenger info"]
  },
  ro: {
    meta: "Misiune",
    lead: "Ce construim în fiecare zi.",
    highlights: [
      {
        title: "Claritate operațională",
        desc: "Vizibilitate în timp real pentru decizii rapide."
      },
      {
        title: "Livrare integrată",
        desc: "Hardware + software care funcționează ca un singur sistem."
      },
      {
        title: "Experiența pasagerilor",
        desc: "Călătorii stabile, simple și previzibile."
      }
    ],
    sideTitle: "Livrăm",
    sideItems: ["ITS integrat", "Taxare digitală", "Inteligență flotă", "Info pasageri"]
  }
};

const splitBlocks = (text?: string) =>
  (text || "")
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

const extractQuote = (blocks: string[]) => {
  const index = blocks.findIndex((block) => block.startsWith(">"));
  if (index === -1) return { quote: "", blocks };
  const [quoteBlock] = blocks.splice(index, 1);
  return { quote: quoteBlock.replace(/^>\s*/, ""), blocks };
};

export default async function MisiunePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-misiune", locale);
  const page = (await getPage("compania-misiune", locale)) || fallback;
  const t = copy[locale];
  const bodyBlocks = splitBlocks(page.body);
  const { quote, blocks } = extractQuote(bodyBlocks);
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
            {quote ? <blockquote className="editorial-quote">{quote}</blockquote> : null}
            <div className="editorial-highlights">
              {t.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>{renderBody(blocks.join("\n\n"))}</div>
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
      </section>
    </main>
  );
}
