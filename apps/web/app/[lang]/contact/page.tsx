import { getPage, getSettings } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { getContactLabels } from "../../lib/site-copy";
import { Mail, MapPin, Phone } from "lucide-react";

const fallbackSettings = {
  companyName: "RADCOM",
  email: "office@radcom.ro",
  phone: "021 232 1039",
  address: "Str. George Constantinescu nr. 2C, Etaj 5 & 6, Sector 2, București"
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallbackPage = getPageFallback("contact", locale);
  const page = (await getPage("contact", locale)) || fallbackPage;
  const settings = (await getSettings()) || fallbackSettings;
  const t = getContactLabels(locale);

  return (
    <main>
      <section
        className="section-block primary hero-banner"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(28,63,149,0.85), rgba(15,33,58,0.45)), url(/hero/contact.webp)"
        }}
      >
        <div className="container">
          <h1 className="section-title">{page.title}</h1>
          <p className="section-lead">{page.summary}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-col">
          <div>
            <h2 className="section-title">{t.formTitle}</h2>
            <p className="section-lead">{t.formLead}</p>
            <form className="card">
              <label>
                {t.fields.name} *
                <input type="text" name="name" required />
              </label>
              <label>
                {t.fields.email} *
                <input type="email" name="email" required />
              </label>
              <label>
                {t.fields.phone}
                <input type="tel" name="phone" />
              </label>
              <label>
                {t.fields.message} *
                <textarea name="message" rows={6} required />
              </label>
              <button className="product-cta" type="submit">
                {t.fields.submit}
              </button>
            </form>
          </div>
          <div>
            <h2 className="section-title">{t.infoTitle}</h2>
            <div className="feature-grid">
              <article className="feature-card has-icon">
                <span className="feature-icon" aria-hidden="true">
                  <Mail size={22} strokeWidth={1.6} />
                </span>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </p>
              </article>
              <article className="feature-card has-icon">
                <span className="feature-icon" aria-hidden="true">
                  <Phone size={22} strokeWidth={1.6} />
                </span>
                <h3>Telefon</h3>
                <p>
                  <a href={`tel:${settings.phone}`}>{settings.phone}</a>
                </p>
              </article>
              <article className="feature-card has-icon">
                <span className="feature-icon" aria-hidden="true">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <h3>{locale === "ro" ? "Adresă" : "Address"}</h3>
                <p>{settings.address}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
