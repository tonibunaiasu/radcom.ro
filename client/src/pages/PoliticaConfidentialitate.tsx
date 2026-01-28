import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";

export default function PoliticaConfidentialitate() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        titleKey="seo.privacyPolicy.title"
        descriptionKey="seo.privacyPolicy.description"
        path="/politica-confidentialitate"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('privacyPolicy.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              {t('privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                  {t('privacyPolicy.intro.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.intro.content')}
                </p>
              </div>

              {/* Data Controller */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.dataController.title')}
                </h2>
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2"><strong>RADCOM</strong></p>
                  <p className="text-muted-foreground">Str. George Constantinescu nr. 2C, Etaj 5 & 6</p>
                  <p className="text-muted-foreground">Sector 2, București, România</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:office@radcom.ro" className="text-primary hover:underline">office@radcom.ro</a></p>
                  <p className="text-muted-foreground">Telefon: <a href="tel:0212321039" className="text-primary hover:underline">021 232 1039</a></p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.dataCollection.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPolicy.dataCollection.content')}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('privacyPolicy.dataCollection.personal.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('privacyPolicy.dataCollection.personal.description')}
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('privacyPolicy.dataCollection.technical.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('privacyPolicy.dataCollection.technical.description')}
                    </p>
                  </div>

                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t('privacyPolicy.dataCollection.usage.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('privacyPolicy.dataCollection.usage.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Data */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.howWeUse.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPolicy.howWeUse.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t('privacyPolicy.howWeUse.purposes.service')}</li>
                  <li>{t('privacyPolicy.howWeUse.purposes.communication')}</li>
                  <li>{t('privacyPolicy.howWeUse.purposes.improvement')}</li>
                  <li>{t('privacyPolicy.howWeUse.purposes.legal')}</li>
                  <li>{t('privacyPolicy.howWeUse.purposes.marketing')}</li>
                </ul>
              </div>

              {/* Legal Basis */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.legalBasis.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.legalBasis.content')}
                </p>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.dataSharing.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.dataSharing.content')}
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.dataRetention.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.dataRetention.content')}
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.yourRights.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPolicy.yourRights.content')}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>{t('privacyPolicy.yourRights.rights.access')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.rectification')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.erasure')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.restriction')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.portability')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.objection')}</strong></li>
                  <li><strong>{t('privacyPolicy.yourRights.rights.complaint')}</strong></li>
                </ul>
              </div>

              {/* Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.security.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.security.content')}
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.children.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.children.content')}
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.changes.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacyPolicy.changes.content')}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12 bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {t('privacyPolicy.contact.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('privacyPolicy.contact.content')}
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>RADCOM - Data Protection Officer</strong></p>
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
