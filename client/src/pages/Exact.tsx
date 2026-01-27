import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Monitor, Volume2, Clock, Route, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";

export default function Exact() {
  const { t } = useTranslation();
  const features = [
    {
      icon: Route,
      title: t('products.exactPage.features.routePlanning'),
      description: t('products.exactPage.features.routePlanningDesc'),
    },
    {
      icon: Monitor,
      title: t('products.exactPage.features.ledDisplays'),
      description: t('products.exactPage.features.ledDisplaysDesc'),
    },
    {
      icon: Monitor,
      title: t('products.exactPage.displayTypes.exterior'),
      description: t('products.exactPage.displayTypes.exteriorDesc'),
    },
    {
      icon: Volume2,
      title: t('products.exactPage.features.voiceAnnouncements'),
      description: t('products.exactPage.features.voiceAnnouncementsDesc'),
    },
    {
      icon: Clock,
      title: t('products.exactPage.features.eta'),
      description: t('products.exactPage.features.etaDesc'),
    },
    {
      icon: Info,
      title: t('products.exactPage.features.passengerFeed'),
      description: t('products.exactPage.features.passengerFeedDesc'),
    },
  ];

  const displayFeatures = [
    { title: "Contrast Ridicat", description: "Vizibilitate excelentă chiar și în lumina puternică a soarelui" },
    { title: "Senzori Lumină", description: "Control automat al luminozității pentru confort vizual" },
    { title: "Unghi Vizualizare Mare", description: "LED-uri puternice pentru citire din orice unghi" },
    { title: "Setare Volum Remote", description: "Control centralizat al volumului audio din dispecerat" },
    { title: "Volum Programabil", description: "Ajustare automată a volumului în funcție de ora zilei" },
    { title: "Multilingv", description: "Suport pentru anunțuri în multiple limbi" },
  ];

  const useCases = [
    {
      title: "Stații Transport Public",
      description: "Afișaje în stații cu informații despre sosiri, plecări și întârzieri în timp real.",
    },
    {
      title: "Feed Informații Pasageri",
      description: "Transmitere continuă de informații utile: rute, orare, conexiuni și anunțuri speciale.",
    },
    {
      title: "Sisteme Informare Publică",
      description: "Integrare cu sisteme de alertare pentru situații de urgență sau evenimente speciale.",
    },
    {
      title: "Publicitate Dinamică",
      description: "Posibilitate afișare mesaje publicitare între informațiile de călătorie.",
    },
    {
      title: "Panouri Destinație",
      description: "Afișare clară a destinației finale și rutei pentru identificare rapidă a vehiculului corect.",
    },
    {
      title: "Anunțuri Speciale",
      description: "Comunicare rapidă a schimbărilor de traseu, lucrări sau evenimente care afectează transportul.",
    },
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
                  src="/products/eXact.svg" 
                  alt="RADCOM eXact - Real Time Route Planning" 
                  className="h-24 md:h-32 w-auto"
                />
                <p className="text-xl text-primary-foreground/90">Real Time Route Planning</p>
              </div>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
                Sistem inteligent de informații pentru pasageri cu planificator de rute în timp real
              </p>
              <p className="text-base text-primary-foreground/80">
                Afișaje LED interioare și exterioare, anunțuri vocale, timp estimat de ajungere și conexiuni de linie. 
                Experiență completă pentru călători informați și operațiuni transparente.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Funcționalități Principale
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Informare completă a pasagerilor prin multiple canale de comunicare
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
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LED Displays Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Afișaje LED cu Informații
                </h2>
                <p className="text-lg text-muted-foreground">
                  Transmitere continuă de informații în timp real cu vizibilitate excelentă
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Caracteristici Afișaje</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Design viu cu contrast ridicat pentru lizibilitate maximă în orice condiții de lumină</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Senzori individuali de lumină ambientală pentru control automat al luminozității</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Jaluzele integrate pentru lizibilitate excelentă chiar și în lumina puternică a soarelui</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>LED-uri puternice pentru unghi de vizualizare foarte mare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Sistem audio integrat pentru informații vocale sincronizate cu afișajele</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success mt-1">✓</span>
                      <span>Setare la distanță a volumului și volum audio programat pentru confort maxim</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Avantaje Tehnice</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {displayFeatures.map((feature, index) => (
                      <div key={index} className="bg-success/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-success mb-1 text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Cazuri de Utilizare
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2 text-success">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Beneficii pentru Pasageri și Operatori
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-success">Experiență Pasageri Superioară</h3>
                  <p className="text-muted-foreground">
                    Informații precise în timp real, planificare călătorie optimă, reducere anxietate așteptare și încredere sporită în sistem.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-success">Transparență Operațională</h3>
                  <p className="text-muted-foreground">
                    Comunicare clară cu pasagerii, reducere reclamații, îmbunătățire imagine brand și satisfacție crescută.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-success">Eficiență Îmbarcări</h3>
                  <p className="text-muted-foreground">
                    Pasageri informați înainte de sosirea vehiculului, reducere timp îmbarcare, fluidizare trafic la stații.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-success">Accesibilitate Sporită</h3>
                  <p className="text-muted-foreground">
                    Anunțuri audio pentru persoane cu deficiențe de vedere, afișaje clare pentru persoane cu deficiențe de auz, suport multilingv.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-success text-success-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Informează pasagerii în timp real
              </h2>
              <p className="text-lg mb-8 text-success-foreground/90">
                Descoperă cum RADCOM eXact poate transforma experiența pasagerilor și îmbunătăți 
                percepția publică asupra sistemului tău de transport.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Solicită Demonstrație
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/servicii">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-success-foreground text-success-foreground hover:bg-success-foreground hover:text-success">
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
