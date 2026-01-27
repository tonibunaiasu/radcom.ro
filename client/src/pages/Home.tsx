import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Truck, 
  Heart, 
  Radio, 
  Smartphone, 
  Globe,
  Code,
  Network,
  Lightbulb,
  Zap,
  Palette,
  FileCode
} from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Home() {
  const { t } = useTranslation();
  const { data: services } = trpc.services.getAll.useQuery();
  const { data: solutions } = trpc.solutions.getAll.useQuery();
  const { data: partners } = trpc.partners.getAll.useQuery();

  const industryIcons = {
    transport: Truck,
    medical: Heart,
    telecom: Radio,
    "media-mobile": Smartphone,
    internet: Globe,
  };

  const advantageIcons = {
    responsivitate: Zap,
    customizare: Palette,
    "elemente-ui": Lightbulb,
    "cod-curat": FileCode,
  };

  const advantages = [
    {
      key: "responsivitate",
      title: t('advantages.responsiveness.title'),
      description: t('advantages.responsiveness.description'),
    },
    {
      key: "customizare",
      title: t('advantages.customization.title'),
      description: t('advantages.customization.description'),
    },
    {
      key: "elemente-ui",
      title: t('advantages.uiElements.title'),
      description: t('advantages.uiElements.description'),
    },
    {
      key: "cod-curat",
      title: t('advantages.cleanCode.title'),
      description: t('advantages.cleanCode.description'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('hero.title')}{" "}
                <span className="text-accent">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    {t('cta.contactUs')}
                  </Button>
                </Link>
                <Link href="/servicii">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                    {t('cta.discoverMore')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics/Highlights Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{t('stats.top3')}</h3>
                      <p className="text-muted-foreground">
                        {t('stats.top3Description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{t('stats.completeServices')}</h3>
                      <p className="text-muted-foreground">
                        {t('stats.completeServicesDescription')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{t('stats.perfectSolutions')}</h3>
                      <p className="text-muted-foreground">
                        {t('stats.perfectSolutionsDescription')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferim o gamă completă de servicii de dezvoltare software și infrastructură IT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services && services.length > 0 ? (
                services.slice(0, 6).map((service) => {
                  const IconComponent = service.category === "dezvoltare" ? Code : Network;
                  return (
                    <Card key={service.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {service.shortDescription}
                            </p>
                            <Link href={`/servicii/${service.slug}`}>
                              <Button variant="link" className="p-0 h-auto text-primary">
                                Află mai multe →
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  Serviciile vor fi disponibile în curând
                </div>
              )}
            </div>

            <div className="text-center mt-8">
              <Link href="/servicii/dezvoltare">
                <Button size="lg" variant="outline">
                  Vezi Toate Serviciile
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions by Industry Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluții pe Industrii</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expertise specializat pentru diverse sectoare de activitate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions && solutions.length > 0 ? (
                solutions.slice(0, 5).map((solution) => {
                  const iconKey = solution.slug as keyof typeof industryIcons;
                  const IconComponent = industryIcons[iconKey] || Globe;
                  return (
                    <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="p-4 rounded-full bg-primary/10 mb-4">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="font-semibold text-xl mb-3">{solution.industry}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {solution.description?.substring(0, 100)}...
                          </p>
                          <Link href={`/solutii/${solution.slug}`}>
                            <Button variant="link" className="p-0 h-auto text-primary">
                              Explorează →
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  Soluțiile vor fi disponibile în curând
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Avantajele Soluțiilor Noastre</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cele 4 pilari care ne definesc abordarea în dezvoltarea de soluții IT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advantages.map((advantage) => {
                const IconComponent = advantageIcons[advantage.key as keyof typeof advantageIcons];
                return (
                  <Card key={advantage.key} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/20">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        {partners && partners.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Parteneri</h2>
                <p className="text-lg text-muted-foreground">
                  Colaborăm cu lideri din industrie pentru a oferi cele mai bune soluții
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                      />
                    ) : (
                      <span className="text-sm font-medium text-muted-foreground">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pregătit să Începem un Proiect Împreună?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Contactează-ne astăzi pentru a discuta despre cum te putem ajuta să îți atingi obiectivele de business
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Contactează-ne Acum
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
