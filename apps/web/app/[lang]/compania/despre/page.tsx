import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";

export default async function DesprePage({ params }: {
  params: { lang: string };
}) {
  const locale = getLocale({ lang: params.lang });
  const fallback = getPageFallback("compania-despre", locale);
  const page = (await getPage("compania-despre", locale)) || fallback;

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
