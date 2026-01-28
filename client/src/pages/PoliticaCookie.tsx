import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";

export default function PoliticaCookie() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        titleKey="seo.cookiePolicy.title"
        descriptionKey="seo.cookiePolicy.description"
        path="/politica-cookie"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('cookiePolicy.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t('cookiePolicy.lastUpdated')}: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.intro.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookiePolicy.intro.content')}
                </p>
              </div>

              {/* What are Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.whatAreCookies.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('cookiePolicy.whatAreCookies.content')}
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.typesOfCookies.title')}
                </h2>
                
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('cookiePolicy.typesOfCookies.essential.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('cookiePolicy.typesOfCookies.essential.description')}
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('cookiePolicy.typesOfCookies.analytics.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('cookiePolicy.typesOfCookies.analytics.description')}
                    </p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('cookiePolicy.typesOfCookies.functional.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('cookiePolicy.typesOfCookies.functional.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.managingCookies.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('cookiePolicy.managingCookies.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Google Chrome: Settings → Privacy and security → Cookies</li>
                  <li>Mozilla Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Microsoft Edge: Settings → Cookies and site permissions</li>
                </ul>
              </div>

              {/* Third Party Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.thirdParty.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('cookiePolicy.thirdParty.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12 bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('cookiePolicy.contact.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('cookiePolicy.contact.content')}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>RADCOM</strong></p>
                  <p>Str. George Constantinescu nr. 2C, Etaj 5 & 6</p>
                  <p>Sector 2, București, România</p>
                  <p>Email: <a href="mailto:office@radcom.ro" className="text-primary hover:underline">office@radcom.ro</a></p>
                  <p>Telefon: <a href="tel:0212321039" className="text-primary hover:underline">021 232 1039</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
