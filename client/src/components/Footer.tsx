import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground">
                <span className="text-primary font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">RADCOM</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Soluții integrate hardware + software pentru industria IT&C din România
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compania/despre">
                  <span className="hover:text-accent transition-colors cursor-pointer">Despre Noi</span>
                </Link>
              </li>
              <li>
                <Link href="/servicii/dezvoltare">
                  <span className="hover:text-accent transition-colors cursor-pointer">Servicii</span>
                </Link>
              </li>
              <li>
                <Link href="/solutii/transport">
                  <span className="hover:text-accent transition-colors cursor-pointer">Soluții</span>
                </Link>
              </li>
              <li>
                <Link href="/cariere">
                  <span className="hover:text-accent transition-colors cursor-pointer">Cariere</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resurse</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog">
                  <span className="hover:text-accent transition-colors cursor-pointer">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/stiri">
                  <span className="hover:text-accent transition-colors cursor-pointer">Știri</span>
                </Link>
              </li>
              <li>
                <Link href="/compania/certificari">
                  <span className="hover:text-accent transition-colors cursor-pointer">Certificări</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-accent transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>Email: contact@radcom.ro</li>
              <li>Telefon: +40 123 456 789</li>
              <li>Adresă: București, România</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} RADCOM. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
