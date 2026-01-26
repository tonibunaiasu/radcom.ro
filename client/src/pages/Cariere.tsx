import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Cariere() {
  const { data: jobs, isLoading } = trpc.jobs.getActive.useQuery();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cariere la RADCOM</h1>
              <p className="text-xl text-primary-foreground/90">
                Alătură-te echipei noastre și construiește viitorul tehnologiei împreună cu noi
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">De ce RADCOM?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferim un mediu de lucru stimulant și beneficii competitive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Proiecte Inovatoare</h3>
                  <p className="text-sm text-muted-foreground">
                    Lucrează la proiecte de top pentru clienți din diverse industrii
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Dezvoltare Profesională</h3>
                  <p className="text-sm text-muted-foreground">
                    Programe de training și oportunități de avansare în carieră
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Echipă Prietenoasă</h3>
                  <p className="text-sm text-muted-foreground">
                    Cultură organizațională bazată pe colaborare și respect
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Pachet Competitiv</h3>
                  <p className="text-sm text-muted-foreground">
                    Salariu atractiv, bonusuri și beneficii suplimentare
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Poziții Disponibile</h2>
              <p className="text-lg text-muted-foreground">
                Descoperă oportunitățile de carieră din echipa RADCOM
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Se încarcă pozițiile...</p>
              </div>
            ) : jobs && jobs.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {jobs.map((job) => {
                  const requirements = job.requirements ? JSON.parse(job.requirements) : [];
                  const benefits = job.benefits ? JSON.parse(job.benefits) : [];

                  return (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              {job.department && (
                                <div className="flex items-center gap-1">
                                  <Briefcase size={16} />
                                  <span>{job.department}</span>
                                </div>
                              )}
                              {job.location && (
                                <div className="flex items-center gap-1">
                                  <MapPin size={16} />
                                  <span>{job.location}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Clock size={16} />
                                <span>
                                  {job.type === "full-time" && "Full-time"}
                                  {job.type === "part-time" && "Part-time"}
                                  {job.type === "contract" && "Contract"}
                                  {job.type === "internship" && "Internship"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            Activ
                          </Badge>
                        </div>

                        {job.description && (
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                        )}

                        {requirements.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Cerințe:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {requirements.map((req: string, idx: number) => (
                                <li key={idx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {benefits.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Beneficii:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {benefits.map((benefit: string, idx: number) => (
                                <li key={idx}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <Button className="mt-4">Aplică Acum</Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nu există poziții disponibile momentan.
                </p>
                <p className="text-sm text-muted-foreground">
                  Te rugăm să revii mai târziu sau să ne trimiți CV-ul tău spontan la{" "}
                  <a href="mailto:cariere@radcom.ro" className="text-primary hover:underline">
                    cariere@radcom.ro
                  </a>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-3xl font-bold mb-6 text-center">Cultura Companiei</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      La RADCOM, credem că succesul vine din pasiunea și dedicarea echipei noastre. 
                      Cultivăm un mediu de lucru bazat pe colaborare, inovație și respect mutual.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Fiecare membru al echipei are oportunitatea să își dezvolte abilitățile, 
                      să lucreze la proiecte provocatoare și să contribuie la succesul companiei. 
                      Investim în dezvoltarea profesională continuă și oferim suport pentru 
                      atingerea obiectivelor de carieră.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Alătură-te echipei RADCOM și construiește o carieră de succes în domeniul 
                      tehnologiei!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
