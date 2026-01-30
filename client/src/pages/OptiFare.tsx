import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCard, Smartphone, Ticket, Shield, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function OptiFare() {
  const { t } = useTranslation();
  const features = [
    {
      icon: CreditCard,
      title: t('products.optifarePage.features.contactlessPayment'),
      description: t('products.optifarePage.features.contactlessPaymentDesc'),
    },
    {
      icon: Ticket,
      title: t('products.optifarePage.features.smartCards'),
      description: t('products.optifarePage.features.smartCardsDesc'),
    },
    {
      icon: Smartphone,
      title: t('products.optifarePage.features.qrCodes'),
      description: t('products.optifarePage.features.qrCodesDesc'),
    },
    {
      icon: Shield,
      title: t('products.optifarePage.features.robustHardware'),
      description: t('products.optifarePage.features.robustHardwareDesc'),
    },
    {
      icon: Zap,
      title: t('products.optifarePage.features.realTimeReporting'),
      description: t('products.optifarePage.features.realTimeReportingDesc'),
    },
    {
      icon: Users,
      title: t('products.optifarePage.features.passengerInterface'),
      description: t('products.optifarePage.features.passengerInterfaceDesc'),
    },
  ];

  const validatorSpecs = [
    { label: "Ecran", value: "7\" TFT LCD color tactil capacitiv" },
    { label: "Procesor", value: "Dual Core i.MX7 la 1GHz" },
    { label: "Sistem Operare", value: "Linux" },
    { label: "Carduri Acceptate", value: "VISA, MasterCard, Apple Pay, Google Pay" },
    { label: "RF Interface", value: "ISO/IEC 14443 Type A/B, Mifare 13.56 MHz" },
    { label: "SAM Slots", value: "2x micro SIM" },
  ];

  const paymentMethods = [
    { title: t('products.optifarePage.paymentMethods.bankCards'), description: t('products.optifarePage.paymentMethods.bankCardsDesc') },
    { title: t('products.optifarePage.paymentMethods.mobileWallets'), description: t('products.optifarePage.paymentMethods.mobileWalletsDesc') },
    { title: t('products.optifarePage.paymentMethods.mifareCards'), description: t('products.optifarePage.paymentMethods.mifareCardsDesc') },
    { title: t('products.optifarePage.paymentMethods.qrCodes'), description: t('products.optifarePage.paymentMethods.qrCodesDesc') },
    { title: t('products.optifarePage.paymentMethods.nfcPhones'), description: t('products.optifarePage.paymentMethods.nfcPhonesDesc') },
    { title: t('products.optifarePage.paymentMethods.paperTickets'), description: t('products.optifarePage.paymentMethods.paperTicketsDesc') },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-radcom text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center gap-6 mb-6">
                <img 
                  src="/products/OptiFare.svg" 
                  alt="RADCOM OptiFare - E-Ticketing System" 
                  className="h-24 md:h-32 w-auto product-logo"
                />
                <p className="text-xl text-primary-foreground/90">{t('products.optifare.subtitle')}</p>
              </div>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
                {t('products.optifarePage.description')}
              </p>
              <p className="text-base text-primary-foreground/80">
                {t('products.optifarePage.detailedDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('products.keyFeatures')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('products.optifarePage.allPaymentMethods')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Validator E-Check Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Validatoare E-Check și EMV E-Check
                </h2>
                <p className="text-lg text-muted-foreground">
                  Hardware robust, anti-vandalism, cu ecran tactil mare și interfață intuitivă
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Caracteristici Validatoare</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Carcasă robustă cu strat de sticlă foarte gros pentru protecție împotriva vandalismului</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Ecran tactil capacitiv 7" pentru interacțiune rapidă și plăcută</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Chitanțe care confirmă plata cu cardul pentru transparență completă</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Interfață interactivă multilingvă pentru pasageri din orice țară</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>Validare zonă tarifară pentru sisteme complexe de tarifare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span>LED-uri informative pentru feedback vizual instant</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Specificații Tehnice</h3>
                  <div className="space-y-3">
                    {validatorSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-border pb-2">
                        <span className="font-medium text-muted-foreground">{spec.label}:</span>
                        <span className="text-right text-sm max-w-[60%]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Methods Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-center mb-8">Metode de Plată Acceptate</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="bg-accent/10 p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-accent mb-1">{method.title}</h4>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Beneficii pentru Operatori și Pasageri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Reducere Costuri Operaționale</h3>
                  <p className="text-muted-foreground">
                    Eliminare manipulare numerar, reducere fraude, automatizare colectare venituri și raportare în timp real.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Experiență Pasageri Îmbunătățită</h3>
                  <p className="text-muted-foreground">
                    Îmbarcare rapidă, plată convenabilă, fără nevoie de numerar, interfață intuitivă și suport multilingv.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Securitate și Conformitate</h3>
                  <p className="text-muted-foreground">
                    Standardele EMV, protecție anti-fraudă, tranzacții criptate și conformitate PCI DSS pentru siguranță maximă.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-accent">Flexibilitate și Scalabilitate</h3>
                  <p className="text-muted-foreground">
                    Suport multiple metode plată, integrare ușoară cu sisteme existente, upgrade software remote și extensibilitate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent text-accent-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modernizează sistemul de taxare
              </h2>
              <p className="text-lg mb-8 text-accent-foreground/90">
                Descoperă cum RADCOM OptiFare poate transforma experiența de plată în transportul tău public 
                și reduce costurile operaționale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Solicită Demonstrație
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/servicii">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                    Vezi Toate Produsele
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
