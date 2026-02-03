import { getPage } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { renderBody } from "../../lib/render-body";

export default async function PoliticaConfidentialitatePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("politica-confidentialitate", locale);
  const page = (await getPage("politica-confidentialitate", locale)) || fallback;

  return (
    <main>
      <section className="section-block primary">
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container">{renderBody(page.body)}</div>
      </section>
    </main>
  );
}
