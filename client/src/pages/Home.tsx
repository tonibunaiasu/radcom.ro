import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import { SEOHead } from "@/components/SEOHead";
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
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const { t } = useTranslation();
  const { data: services } = trpc.services.getAll.useQuery();
  const { data: solutions } = trpc.solutions.getAll.useQuery();
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const { data: partners } = trpc.partners.getAll.useQuery();
  const containerRef = useScrollAnimation(0.1);

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
      <SEOHead titleKey="seo.home.title" descriptionKey="seo.home.description" path="/" />
      <Header />

      <main className="flex-1" ref={containerRef as React.RefObject<HTMLElement>}>
        {/* Hero Section - Corporate Modern */}
        <section className="relative bg-primary text-primary-foreground py-28 overflow-hidden">
          {/* Geometric pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Text Content - 60% */}
              <div className="lg:pr-12">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6 scroll-animate" data-delay="1">
                  <span className="text-accent font-mono-numbers font-semibold">30+ ani experiență</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight scroll-animate" data-delay="2">
                  {t('hero.title')}
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-6 text-accent scroll-animate" data-delay="3">
                  {t('hero.titleHighlight')}
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed scroll-animate" data-delay="4">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 scroll-animate" data-delay="5">
                  <Link href="/contact">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-xl hover:shadow-2xl transition-all">
                      {t('cta.contactUs')}
                    </Button>
                  </Link>
                  <Link href="/servicii">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-all">
                      {t('cta.discoverMore')}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Content - 40% */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Glassmorphism card with stats */}
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl scroll-animate" data-delay="6">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                        <div className="p-3 bg-accent rounded-lg">
                          <CheckCircle2 className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div>
                          <div className="font-mono-numbers text-3xl font-bold text-accent">ISO 9001</div>
                          <div className="text-sm text-primary-foreground/80">Certificație Calitate</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <Users className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-mono-numbers text-3xl font-bold">500+</div>
                          <div className="text-sm text-primary-foreground/80">Clienți Mulțumiți</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <TrendingUp className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-mono-numbers text-3xl font-bold">Top 3</div>
                          <div className="text-sm text-primary-foreground/80">Companii Tech România</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative gradient orb */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                </div>
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

        {/* Services Section - Tabs Verticale */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviciile Noastre</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferim o gamă completă de servicii de dezvoltare software și infrastructură IT
              </p>
            </div>

            {services && services.length > 0 ? (
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs Navigation Verticale - Stânga */}
                <div className="lg:w-1/3">
                  <div className="flex flex-col gap-2">
                    {services.slice(0, 6).map((service, index) => {
                      const IconComponent = service.category === "dezvoltare" ? Code : Network;
                      const isActive = activeServiceTab === index;
                      return (
                        <button
                          key={service.id}
                          onClick={() => setActiveServiceTab(index)}
                          className={`
                            flex items-start gap-4 p-4 rounded-lg text-left transition-all
                            border-l-4 hover:bg-accent/5
                            ${
                              isActive
                                ? 'border-accent bg-accent/10 shadow-md'
                                : 'border-transparent bg-secondary/50'
                            }
                          `}
                        >
                          <div className={`p-2 rounded-lg ${
                            isActive ? 'bg-gradient-to-br from-accent to-accent/80' : 'bg-primary/10'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              isActive ? 'text-white' : 'text-primary'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold text-base mb-1 ${
                              isActive ? 'text-accent' : 'text-foreground'
                            }`}>
                              {service.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {service.shortDescription}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Content Cards - Dreapta */}
                <div className="lg:w-2/3">
                  {services.slice(0, 6).map((service, index) => {
                    const IconComponent = service.category === "dezvoltare" ? Code : Network;
                    return (
                      <div
                        key={service.id}
                        className={`${
                          activeServiceTab === index ? 'block animate-fade-in-up' : 'hidden'
                        }`}
                      >
                        <Card className="bg-white dark:bg-card shadow-xl border-0">
                          <CardContent className="p-8">
                            <div className="flex items-start gap-6 mb-6">
                              <div className="p-4 rounded-xl bg-gradient-to-br from-accent to-accent/80">
                                <IconComponent className="w-8 h-8 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </div>

                            <div className="prose prose-sm max-w-none mb-6">
                              <p className="text-foreground/80 leading-relaxed">
                                {service.description || service.shortDescription}
                              </p>
                            </div>

                            <div className="flex gap-4">
                              <Link href={`/servicii/${service.slug}`}>
                                <Button size="lg" className="bg-accent hover:bg-accent/90">
                                  Află mai multe
                                </Button>
                              </Link>
                              <Link href="/contact">
                                <Button size="lg" variant="outline">
                                  Contactează-ne
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Serviciile vor fi disponibile în curând
              </div>
            )}

            <div className="text-center mt-12">
              <Link href="/servicii/dezvoltare">
                <Button size="lg" variant="outline" className="border-2">
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

        {/* Advantages Section - Bento Grid */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Avantajele Soluțiilor Noastre</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cele 4 pilari care ne definesc abordarea în dezvoltarea de soluții IT
              </p>
            </div>

            {/* Bento Grid Layout: 2 mari + 4 mici */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantageIcons[advantage.key as keyof typeof advantageIcons];
                // First 2 cards are large (span 2 rows on desktop)
                const isLarge = index < 2;
                
                return (
                  <div
                    key={advantage.key}
                    className={`group relative scroll-animate ${
                      isLarge ? 'lg:row-span-2' : ''
                    }`}
                    data-delay={String(index + 1)}
                  >
                    {/* Glassmorphism card */}
                    <div className="h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border-2 border-transparent rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" style={{
                      borderImage: 'linear-gradient(135deg, oklch(0.75 0.15 165), oklch(0.82 0.12 95)) 1',
                      borderImageSlice: 1
                    }}>
                      {/* Icon with gradient background */}
                      <div className="inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br from-[oklch(0.75_0.15_165)] to-[oklch(0.82_0.12_95)] shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                        {advantage.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${
                        isLarge ? 'text-base' : 'text-sm'
                      }`}>
                        {advantage.description}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" style={{
                      background: 'radial-gradient(circle at center, oklch(0.75 0.15 165 / 0.3), oklch(0.82 0.12 95 / 0.3))'
                    }}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Parteneri</h2>
              <p className="text-lg text-muted-foreground">
                Colaborăm cu lideri din industrie pentru a oferi cele mai bune soluții
              </p>
            </div>
          </div>

          {/* Bandă dinamică scroll logo-uri parteneri */}
          <PartnersCarousel />
        </section>

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
