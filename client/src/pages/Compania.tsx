import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Award, Users, Building2, Mail, Linkedin } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function Compania() {
  const { data: teamMembers } = trpc.team.getAll.useQuery();
  const { data: pages } = trpc.pages.getPublished.useQuery();

  const aboutPage = pages?.find((p) => p.slug === "despre-noi");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Compania RADCOM</h1>
              <p className="text-xl text-primary-foreground/90">
                Suntem în Top 3 cele mai mari companii de tehnologie din România
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="despre" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="despre">Despre</TabsTrigger>
                <TabsTrigger value="echipa">Echipă</TabsTrigger>
                <TabsTrigger value="certificari">Certificări</TabsTrigger>
              </TabsList>

              {/* Despre Tab */}
              <TabsContent value="despre">
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Building2 className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">Despre Noi</h2>
                      </div>
                      
                      {aboutPage?.content ? (
                        <div className="prose max-w-none">
                          <p className="text-lg leading-relaxed">{aboutPage.content}</p>
                        </div>
                      ) : (
                        <div className="space-y-4 text-muted-foreground">
                          <p className="text-lg leading-relaxed">
                            RADCOM este una dintre cele mai mari companii de tehnologie din România, 
                            specializată în furnizarea de soluții integrate hardware și software pentru 
                            diverse industrii.
                          </p>
                          <p className="text-lg leading-relaxed">
                            Cu o experiență vastă în domeniul IT&C, oferim servicii complete de 
                            dezvoltare software, infrastructură și consultanță pentru programe europene. 
                            Echipa noastră de profesioniști dedicați lucrează pentru a transforma 
                            viziunea clienților în realitate.
                          </p>
                          <p className="text-lg leading-relaxed">
                            Misiunea noastră este să răspundem cu soluții perfect integrate la nevoile 
                            de business ale clienților noștri, asigurând calitate superioară și 
                            inovație continuă.
                          </p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-6 bg-secondary rounded-lg">
                          <div className="text-4xl font-bold text-primary mb-2">15+</div>
                          <p className="text-muted-foreground">Ani de Experiență</p>
                        </div>
                        <div className="text-center p-6 bg-secondary rounded-lg">
                          <div className="text-4xl font-bold text-primary mb-2">500+</div>
                          <p className="text-muted-foreground">Proiecte Finalizate</p>
                        </div>
                        <div className="text-center p-6 bg-secondary rounded-lg">
                          <div className="text-4xl font-bold text-primary mb-2">100+</div>
                          <p className="text-muted-foreground">Clienți Mulțumiți</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Echipa Tab */}
              <TabsContent value="echipa">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-primary" />
                      <h2 className="text-3xl font-bold">Echipa Noastră</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Profesioniști dedicați care transformă viziuni în realitate
                    </p>
                  </div>

                  {teamMembers && teamMembers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {teamMembers.map((member) => (
                        <Card key={member.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="pt-6">
                            <div className="text-center">
                              {member.image ? (
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                />
                              ) : (
                                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                                  <Users className="w-16 h-16 text-primary" />
                                </div>
                              )}
                              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                              <p className="text-primary font-medium mb-2">{member.position}</p>
                              {member.department && (
                                <p className="text-sm text-muted-foreground mb-3">
                                  {member.department}
                                </p>
                              )}
                              {member.biography && (
                                <p className="text-sm text-muted-foreground mb-4">
                                  {member.biography}
                                </p>
                              )}
                              <div className="flex justify-center gap-3">
                                {member.email && (
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="text-primary hover:text-primary/80"
                                  >
                                    <Mail size={20} />
                                  </a>
                                )}
                                {member.linkedin && (
                                  <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80"
                                  >
                                    <Linkedin size={20} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        Informațiile despre echipă vor fi disponibile în curând
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Certificari Tab */}
              <TabsContent value="certificari">
                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">Certificări și Premii</h2>
                      </div>

                      <div className="space-y-6">
                        <div className="border-l-4 border-primary pl-6 py-4">
                          <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                          <p className="text-muted-foreground">
                            Certificare pentru Sistemul de Management al Calității
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6 py-4">
                          <h3 className="text-xl font-bold mb-2">ISO 27001:2013</h3>
                          <p className="text-muted-foreground">
                            Certificare pentru Sistemul de Management al Securității Informației
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6 py-4">
                          <h3 className="text-xl font-bold mb-2">Top 3 Companii IT România</h3>
                          <p className="text-muted-foreground">
                            Recunoscut ca una dintre cele mai mari companii de tehnologie din România
                          </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6 py-4">
                          <h3 className="text-xl font-bold mb-2">Partener Microsoft Gold</h3>
                          <p className="text-muted-foreground">
                            Certificare de parteneriat de nivel superior cu Microsoft
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Vrei să faci parte din echipa RADCOM?</h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Explorează oportunitățile de carieră și alătură-te echipei noastre
              </p>
              <Link href="/cariere">
                <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Vezi Pozițiile Disponibile
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
