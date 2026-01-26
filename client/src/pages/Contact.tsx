import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Mesajul a fost trimis cu succes! Vă vom contacta în curând.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactează-ne</h1>
              <p className="text-xl text-primary-foreground/90">
                Suntem aici pentru a răspunde întrebărilor tale și a discuta despre proiectul tău
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Trimite-ne un mesaj</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nume *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Numele tău complet"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@exemplu.ro"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+40 123 456 789"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Descrie-ne proiectul tău sau întrebările pe care le ai..."
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Informații de Contact</h2>
                
                <div className="space-y-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a
                            href="mailto:contact@radcom.ro"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            contact@radcom.ro
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Telefon</h3>
                          <a
                            href="tel:+40123456789"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +40 123 456 789
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Adresă</h3>
                          <p className="text-muted-foreground">
                            Str. Exemplu Nr. 123
                            <br />
                            București, România
                            <br />
                            Cod Poștal: 012345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Urmărește-ne pe Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Facebook size={24} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter size={24} />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="mt-6">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Program de Lucru</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Luni - Vineri:</span>
                        <span className="font-medium">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sâmbătă:</span>
                        <span className="font-medium">10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duminică:</span>
                        <span className="font-medium">Închis</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Hartă locație (va fi integrată)</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
