import { getPage } from "../../../lib/sanity-queries";
import { getLocale } from "../../../lib/locale";
import { getPageFallback } from "../../../lib/page-fallbacks";
import { renderBody } from "../../../lib/render-body";
import { companyBreadcrumbs, companyLinks } from "../../../lib/company-nav";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default async function EchipaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallback = getPageFallback("compania-echipa", locale);
  const page = (await getPage("compania-echipa", locale)) || fallback;
  const currentPath = "/compania/echipa";
  const breadcrumbs = companyBreadcrumbs(locale, locale === "ro" ? "Echipă" : "Team");
  const quickLinks = companyLinks[locale].filter((item) => item.href !== currentPath);
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
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>
      <section className="section-block">
        <div className="container">
          <div className="inline-links">
            {quickLinks.map((item) => (
              <a key={item.href} href={`/${locale}${item.href}`}>
                {item.label}
              </a>
            ))}
          </div>
          {renderBody(page.body)}
        </div>
      </section>
    </main>
  );
}
