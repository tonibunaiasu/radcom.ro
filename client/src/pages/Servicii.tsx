import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Code, Network, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Servicii() {
  const services = [
    {
      id: "dezvoltare",
      title: "Dezvoltare Software",
      icon: Code,
      description: "Soluții software personalizate pentru diverse industrii: Transport, Medical, Telecom, Media & Mobile, Internet. Dezvoltăm aplicații web, mobile și platforme integrate adaptate nevoilor specifice ale fiecărui domeniu.",
      features: [
        "Aplicații web și mobile",
        "Platforme de management",
        "Integrări API și sisteme",
        "Soluții cloud și on-premise",
      ],
      link: "/servicii/dezvoltare",
      color: "bg-accent",
      iconColor: "text-accent-foreground",
    },
    {
      id: "infrastructura",
      title: "Infrastructură",
      icon: Network,
      description: "Servicii complete de infrastructură IT și telecomunicații: rețele de telecomunicații, lucrări electrice, rețele de fibră optică, construcții civile, sisteme de automatizări SCADA și proiecte cu fonduri europene.",
      features: [
        "Rețele de telecomunicații",
        "Rețele de fibră optică",
        "Lucrări electrice",
        "Sisteme SCADA",
      ],
      link: "/servicii/infrastructura",
      color: "bg-primary",
      iconColor: "text-primary-foreground",
    },
    {
      id: "programe-europene",
      title: "Programe Europene",
      icon: Globe,
      description: "Consultanță specializată pentru accesarea fondurilor europene, identificare oportunități de finanțare, pregătire documentație și management de proiect pentru inițiative cu finanțare europeană.",
      features: [
        "Consultanță finanțare",
        "Identificare oportunități",
        "Pregătire documentație",
        "Management de proiect",
      ],
      link: "/servicii/programe-europene",
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
                Servicii IT&C Complete
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Oferim soluții integrate hardware + software pentru diverse industrii din România. 
                De la dezvoltare software la infrastructură și consultanță pentru fonduri europene.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Icon Header */}
                    <div className={`${service.color} p-8 flex items-center justify-center`}>
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`w-12 h-12 ${service.iconColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-card-foreground">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <Link href={service.link}>
                        <Button 
                          className="w-full group-hover:translate-x-1 transition-transform duration-300"
                          variant="default"
                        >
                          Descoperă Mai Mult
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

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ai nevoie de o soluție personalizată?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Echipa noastră de experți este gata să te ajute să găsești cea mai bună soluție 
                pentru nevoile tale de business.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Contactează-ne
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
