import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "wouter";
import { Truck, Heart, Radio, Smartphone, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";

const industryIcons = {
  transport: Truck,
  medical: Heart,
  telecom: Radio,
  "media-mobile": Smartphone,
  internet: Globe,
};

export default function SolutionDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: solution, isLoading } = trpc.solutions.getBySlug.useQuery(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Se încarcă...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Soluția nu a fost găsită</p>
            <Link href="/">
              <Button variant="outline">Înapoi la Homepage</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = industryIcons[slug as keyof typeof industryIcons] || Globe;
  const challenges = solution.challenges ? JSON.parse(solution.challenges) : [];
  const specificBenefits = solution.specificBenefits ? JSON.parse(solution.specificBenefits) : [];

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
                  <h1 className="text-4xl md:text-5xl font-bold">{solution.industry}</h1>
                </div>
              </div>
              <p className="text-xl text-primary-foreground/90">
                {solution.description}
              </p>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        {challenges.length > 0 && (
          <section className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8">Provocări Rezolvate</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge: string, idx: number) => (
                  <Card key={idx} className="border-l-4 border-l-destructive">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                        <p className="text-foreground">{challenge}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {specificBenefits.length > 0 && (
          <section className="py-16 bg-secondary">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8">Beneficii Specifice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specificBenefits.map((benefit: string, idx: number) => (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Image */}
        {solution.featuredImage && (
          <section className="py-16">
            <div className="container">
              <img
                src={solution.featuredImage}
                alt={solution.industry}
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Interesat de soluțiile noastre pentru {solution.industry}?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Contactează-ne pentru a afla cum te putem ajuta să implementezi aceste soluții
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Contactează-ne
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Înapoi la Homepage
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
