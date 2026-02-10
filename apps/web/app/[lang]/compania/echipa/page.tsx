import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";
import { SubNav } from "../../../components/SubNav";

export default async function EchipaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-echipa", locale);
  const page = (await getPage("compania-echipa", locale)) || fallback;
  const subnavItems = [
    { label: locale === "ro" ? "Istoric" : "History", href: "/compania/istoric" },
    { label: locale === "ro" ? "Echipă" : "Team", href: "/compania/echipa" },
    { label: locale === "ro" ? "Certificări" : "Certifications", href: "/compania/certificari" }
  ];

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
      <SubNav items={subnavItems} />

      <section className="section-block">
        <div className="container">{renderBody(page.body)}</div>
      </section>
    </main>
  );
}
