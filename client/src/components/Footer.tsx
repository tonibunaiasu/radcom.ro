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
              <img 
                src="/logo-footer.png" 
                alt="RADCOM Logo" 
                className="h-10 w-auto"
              />
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
              <li>Email: office@radcom.ro</li>
              <li>Telefon: 021 232 1039</li>
              <li>Str. Constantinescu nr. 2C, Etaj 5 & 6</li>
              <li>Sector 2, București</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/RadcomRomania"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/RadcomRomania"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/radcom.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/radcom-romania/"
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
