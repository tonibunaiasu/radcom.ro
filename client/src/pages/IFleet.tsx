import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bus, Video, MapPin, BarChart3, Clock, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function IFleet() {
  const features = [
    {
      icon: MapPin,
      title: "Tracking GPS în Timp Real",
      description: "Urmărire precisă a poziției fiecărui vehicul din flotă cu actualizare în timp real și istoric complet al traseelor parcurse.",
    },
    {
      icon: Video,
      title: "Monitorizare Video",
      description: "Sistem integrat de supraveghere video pentru siguranța pasagerilor și protecția șoferilor, cu stocare cloud și acces remote.",
    },
    {
      icon: BarChart3,
      title: "Numărare Automată Pasageri",
      description: "Senzori avansați pentru numărare precisă a pasagerilor la fiecare stație, cu raportare automată și analiză statistică.",
    },
    {
      icon: Clock,
      title: "Respectarea Programului",
      description: "Monitorizare în timp real a respectării orarului, alertare automată pentru întârzieri și optimizare rute pentru eficiență maximă.",
    },
    {
      icon: Shield,
      title: "Computer On-Board Robust",
      description: "Hardware industrial de ultimă generație, rezistent la vibrații și temperaturi extreme, cu conectivitate 4G/WiFi/Bluetooth.",
    },
    {
      icon: BarChart3,
      title: "Raportare și Analiză",
      description: "Dashboard complet cu rapoarte detaliate, KPI-uri operaționale și analize predictive pentru optimizarea flotei.",
    },
  ];

  const cobSpecs = [
    { label: "Procesor", value: "Intel® Atom™ QC x7 /E3950 (1.6~2.0GHz)" },
    { label: "Memorie", value: "DDR3L SO-DIMM până la 16 GB" },
    { label: "Stocare", value: "mSATA SSD" },
    { label: "Comunicare", value: "GPRS / 2G / 3G / 4G, WiFi 802.11ac, Bluetooth 4.2" },
    { label: "Sistem Operare", value: "Linux" },
    { label: "Upgrade", value: "Local / Remote" },
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
                  src="/products/iFleet.svg" 
                  alt="RADCOM iFleet - Extended Fleet Management" 
                  className="h-24 md:h-32 w-auto"
                />
                <p className="text-xl text-primary-foreground/90">Extended Fleet Management</p>
              </div>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">
                Sistem complet de management al flotei pentru transportul public
              </p>
              <p className="text-base text-primary-foreground/80">
                Soluție integrată care include numărarea automată a pasagerilor, monitorizare video în timp real, 
                tracking GPS și raportare avansată pentru optimizarea operațiunilor de transport.
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
                Totul de care ai nevoie pentru managementul eficient al flotei de transport public
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
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Computer On-Board Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Computer On-Board (COB)
                </h2>
                <p className="text-lg text-muted-foreground">
                  Inima sistemului iFleet - hardware industrial de ultimă generație
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Ce gestionează COB?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Înregistrarea de date (coordonate GPS, viteză, kilometraj, integrare CAN autobuz, evenimente, validări)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Urmărirea în timp real și detectarea opririi prin corelarea coordonatelor cu parametrii rutei</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Suport pentru activitățile șoferului: autentificare, selectare traseu, respectare program, comunicare cu dispecerat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Informații pentru pasageri prin afișaje interioare și exterioare (stație curentă, următoarele stații, timp estimat)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Înregistrarea și transferul datelor din sistemul de numărare pasageri și e-ticketing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Specificații Tehnice</h3>
                  <div className="space-y-3">
                    {cobSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-border pb-2">
                        <span className="font-medium text-muted-foreground">{spec.label}:</span>
                        <span className="text-right text-sm max-w-[60%]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
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
                Beneficii pentru Operatori
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Eficiență Operațională</h3>
                  <p className="text-muted-foreground">
                    Optimizare rute, reducere costuri combustibil, îmbunătățire respectare orar și creștere productivitate flotă.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Siguranță Sporită</h3>
                  <p className="text-muted-foreground">
                    Monitorizare video 24/7, alertare automată incidente, protecție șoferi și pasageri, dovezi video pentru asigurări.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Decizii Bazate pe Date</h3>
                  <p className="text-muted-foreground">
                    Rapoarte detaliate, analize statistice, KPI-uri în timp real, predicții trafic și optimizare capacitate.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Satisfacție Pasageri</h3>
                  <p className="text-muted-foreground">
                    Informații precise în timp real, respectare program, siguranță sporită și experiență de călătorie îmbunătățită.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gata să optimizezi flota ta?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Contactează-ne pentru o demonstrație live a sistemului RADCOM iFleet și descoperă 
                cum putem transforma operațiunile tale de transport public.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Solicită Demonstrație
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/servicii">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
