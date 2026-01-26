import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { Code, Network, Globe, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const categoryInfo = {
  dezvoltare: {
    title: "Dezvoltare Software",
    description: "Soluții software complete și personalizate pentru diverse industrii",
    icon: Code,
  },
  infrastructura: {
    title: "Infrastructură",
    description: "Servicii complete de proiectare, construire și mentenanță infrastructură IT",
    icon: Network,
  },
  "programe-europene": {
    title: "Programe Europene",
    description: "Consultanță și identificare oportunități de finanțare europeană",
    icon: Globe,
  },
};

export default function ServicesCategory() {
  const params = useParams();
  const categorySlug = params.category as string;
  
  const categoryKey = categorySlug === "programe-europene" 
    ? "programe_europene" 
    : categorySlug as "dezvoltare" | "infrastructura";
  
  const { data: services, isLoading } = trpc.services.getByCategory.useQuery(categoryKey);
  const { data: caseStudies } = trpc.caseStudies.getAll.useQuery();

  const info = categoryInfo[categorySlug as keyof typeof categoryInfo] || categoryInfo.dezvoltare;
  const IconComponent = info.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg bg-primary-foreground/10">
                  <IconComponent className="w-10 h-10" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">{info.title}</h1>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90">
                {info.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Serviciile Noastre</h2>
            
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Se încarcă serviciile...</p>
              </div>
            ) : services && services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => {
                  const technologies = service.technologies 
                    ? JSON.parse(service.technologies) 
                    : [];
                  const benefits = service.benefits 
                    ? JSON.parse(service.benefits) 
                    : [];

                  return (
                    <Card key={service.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>

                        {technologies.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Tehnologii:</h4>
                            <div className="flex flex-wrap gap-2">
                              {technologies.map((tech: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {benefits.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Beneficii:</h4>
                            <ul className="space-y-2">
                              {benefits.map((benefit: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nu există servicii disponibile în această categorie momentan.
                </p>
                <Link href="/">
                  <Button variant="outline">Înapoi la Homepage</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Case Studies Section */}
        {caseStudies && caseStudies.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8">Cazuri de Studiu</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudies.slice(0, 3).map((caseStudy) => (
                  <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      {caseStudy.featuredImage && (
                        <img
                          src={caseStudy.featuredImage}
                          alt={caseStudy.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                      )}
                      <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                      {caseStudy.client && (
                        <p className="text-sm text-muted-foreground mb-3">
                          Client: {caseStudy.client}
                        </p>
                      )}
                      <p className="text-sm mb-4">{caseStudy.description}</p>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Citește mai mult →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="pt-8 pb-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">
                    Ai nevoie de serviciile noastre?
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-6">
                    Contactează-ne pentru a discuta despre proiectul tău și cum te putem ajuta
                  </p>
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Contactează-ne
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
