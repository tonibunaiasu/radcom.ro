import { getPage, getSettings } from "../../lib/sanity-queries";
import { getLocale } from "../../lib/locale";
import { getPageFallback } from "../../lib/page-fallbacks";
import { getContactLabels } from "../../lib/site-copy";
import type { Metadata } from "next";

const editorialCopy = {
  en: {
    meta: "Contact",
    lead: "Let’s shape the next generation of urban mobility.",
    highlights: [
      {
        title: "Fast response",
        desc: "We reply quickly with clear next steps."
      },
      {
        title: "Real stakeholders",
        desc: "We speak with operators, not just inboxes."
      },
      {
        title: "Project clarity",
        desc: "We translate needs into measurable scope."
      }
    ],
    sideTitle: "Talk to us about",
    sideItems: ["ITS projects", "Fleet systems", "E-ticketing", "Passenger info"]
  },
  ro: {
    meta: "Contact",
    lead: "Construim împreună următoarea generație de mobilitate urbană.",
    highlights: [
      {
        title: "Răspuns rapid",
        desc: "Revenim cu pași clari și un plan."
      },
      {
        title: "Dialog real",
        desc: "Vorbim cu operatori, nu doar cu inboxuri."
      },
      {
        title: "Claritate",
        desc: "Transformăm nevoile în scopuri măsurabile."
      }
    ],
    sideTitle: "Hai să vorbim despre",
    sideItems: ["Proiecte ITS", "Sisteme flotă", "E-ticketing", "Info pasageri"]
  }
};

const fallbackSettings = {
  companyName: "Radcom S.A.",
  email: "office@radcom.ro",
  phone: "+40-21-232.10.39 / +40-31-824.40.00",
  address:
    "Strada George Constantinescu, nr. 2C, Etaj 5 & 6, Cod: 20339, Sector 2, București, România"
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "ro" ? "ro" : "en";
  const title = locale === "ro" ? "Contact RADCOM" : "Contact RADCOM";
  const description =
    locale === "ro"
      ? "Spune-ne despre proiectul tău. Revenim rapid cu pași clari."
      : "Tell us about your project. We respond quickly with clear next steps.";
  const image = "/hero/contact.webp";
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

export default async function ContactPage({
  params,
  searchParams
}: {
  params: Promise<{ lang: string }>;
  searchParams?: { sent?: string; error?: string };
}) {
  const { lang } = await params;

  const locale = getLocale({ lang: lang });
  const fallbackPage = getPageFallback("contact", locale);
  const page = (await getPage("contact", locale)) || fallbackPage;
  const settings = (await getSettings()) || fallbackSettings;
  const t = getContactLabels(locale);
  const e = editorialCopy[locale];
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error === "1";

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
        <div className="container editorial-grid" style={{ marginBottom: 32 }}>
          <div>
            <div className="editorial-meta">
              {e.meta}
              <span />
              {e.lead}
            </div>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              {page.summary}
            </h2>
            <div className="editorial-highlights">
              {e.highlights.map((item) => (
                <div className="editorial-highlight" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="editorial-side">
            <div className="editorial-card">
              <h4>{e.sideTitle}</h4>
              <ul>
                {e.sideItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="container two-col">
          <div>
            <h2 className="section-title">{t.formTitle}</h2>
            <p className="section-lead">{t.formLead}</p>
            {sent && (
              <p className="contact-alert success">
                {locale === "ro"
                  ? "Mesajul a fost trimis. Îți răspundem cât mai curând."
                  : "Your message was sent. We will get back to you soon."}
              </p>
            )}
            {error && (
              <p className="contact-alert error">
                {locale === "ro"
                  ? "Nu am putut trimite mesajul. Te rugăm să încerci din nou."
                  : "We could not send your message. Please try again."}
              </p>
            )}
            <form className="card" method="post" action="/api/contact">
              <input type="hidden" name="locale" value={locale} />
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
            <div className="card">
              <h3 style={{ marginTop: 0 }}>Radcom S.A.</h3>
              <p>
                {locale === "ro" ? "E-mail" : "Email"}:{" "}
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </p>
              <p>{settings.address}</p>
              <p>
                {locale === "ro" ? "CIF: RO3939511" : "VAT: RO3939511"}
                <br />
                {locale === "ro"
                  ? "Nr. Registrul Comerțului: J40/10148/1993"
                  : "Trade Register No.: J40/10148/1993"}
                <br />
                {locale === "ro"
                  ? "Capital social: 205.000 RON"
                  : "Share capital: 205,000 RON"}
              </p>
              <p>
                {locale === "ro" ? "Telefon" : "Phone"}:{" "}
                <a href="tel:+40212321039">+40-21-232.10.39</a>{" "}
                {locale === "ro" ? "sau" : "or"}{" "}
                <a href="tel:+40318244000">+40-31-824.40.00</a>
                <br />
                {locale === "ro" ? "Fax" : "Fax"}: +40-21-232.10.68
                <br />
                {locale === "ro" ? "E-mail" : "Email"}:{" "}
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
