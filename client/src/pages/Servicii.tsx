import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bus, CreditCard, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Servicii() {
  const products = [
    {
      id: "ifleet",
      title: "iFleet",
      subtitle: "Extended Fleet Management",
      logo: "/products/iFleet.svg",
      icon: Bus,
      description: "Sistem complet de management al flotei pentru transportul public. Soluție integrată care include numărarea automată a pasagerilor, monitorizare video în timp real, tracking GPS și raportare avansată pentru optimizarea operațiunilor de transport.",
      features: [
        "Management complet al flotei de vehicule",
        "Numărare automată pasageri",
        "Monitorizare video în timp real",
        "Tracking GPS și urmărire vehicule",
        "Raportare și analiză date complete",
        "Computer On-Board integrat",
      ],
      link: "/servicii/ifleet",
      color: "bg-primary",
      iconColor: "text-primary-foreground",
    },
    {
      id: "optifare",
      title: "OptiFare",
      subtitle: "E-Ticketing System",
      logo: "/products/OptiFare.svg",
      icon: CreditCard,
      description: "Sistem avansat de e-ticketing pentru transportul public. Validare carduri inteligente Mifare, plată contactless cu Visa și MasterCard, suport NFC și interfață interactivă pentru pasageri. Soluție completă pentru modernizarea sistemului de taxare.",
      features: [
        "Validare carduri inteligente Mifare",
        "Plată călătorie Visa și MasterCard",
        "Suport telefoane NFC (Apple Pay, Google Pay)",
        "Chitanțe confirmare plată",
        "Interfață interactivă pentru pasageri",
        "Validatoare E-Check robuste anti-vandalism",
      ],
      link: "/servicii/optifare",
      color: "bg-accent",
      iconColor: "text-accent-foreground",
    },
    {
      id: "exact",
      title: "eXact",
      subtitle: "Real Time Route Planning",
      logo: "/products/eXact.svg",
      icon: MapPin,
      description: "Sistem inteligent de informații pentru pasageri cu planificator de rute în timp real. Afișaje LED interioare și exterioare, anunțuri vocale, timp estimat de ajungere și conexiuni de linie. Experiență completă pentru călători informați.",
      features: [
        "Planificator de rute în timp real",
        "Informații vizuale și audio pentru pasageri",
        "Afișaje LED interioare și exterioare",
        "Timp estimat de ajungere la stații",
        "Anunțuri vocale automate",
        "Conexiuni de linie și transfer",
      ],
      link: "/servicii/exact",
      color: "bg-success",
      iconColor: "text-success-foreground",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-radcom text-primary-foreground py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sistemul Integrat RADCOM
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-4">
                STI pentru transportul public - Soluții complete hardware + software
              </p>
              <p className="text-base text-primary-foreground/80">
                Oferim cele mai avansate sisteme pentru managementul flotei, e-ticketing și informații pentru pasageri, 
                integrate într-o platformă unică pentru operatorii de transport public din România.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Soluțiile propuse de noi
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trei produse integrate care transformă complet experiența de transport public
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.id}
                    className="bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Logo Header */}
                    <div className={`${product.color} p-8 flex flex-col items-center justify-center text-center`}>
                      <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                        <img 
                          src={product.logo} 
                          alt={`RADCOM ${product.title} - ${product.subtitle}`}
                          className="h-32 w-auto"
                        />
                      </div>
                      <p className="text-sm text-primary-foreground/90 font-medium">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-card-foreground">
                            <span className="text-primary mt-1 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link href={product.link}>
                        <Button 
                          className="w-full group-hover:translate-x-1 transition-transform duration-300"
                          variant="default"
                        >
                          Descoperă {product.title}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Sistem Complet Integrat
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-card rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Produse integrate</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Platformă unificată</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg shadow">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Soluție completă</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground leading-relaxed">
                Sistemul integrat RADCOM combină cele trei produse principale într-o platformă unică, 
                oferind operatorilor de transport public o soluție completă pentru management, taxare și 
                informare pasageri. Hardware robust, software performant și suport tehnic dedicat.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modernizează sistemul tău de transport public
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Echipa noastră de experți este gata să te ajute să implementezi cele mai avansate 
                soluții pentru operatorii de transport din România.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Solicită o Demonstrație
                  <ArrowRight className="ml-2 w-5 h-5" />
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
