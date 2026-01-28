import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo-white.png" 
                alt="RADCOM Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/compania/despre" className="hover:text-accent transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-accent transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link href="/solutii/transport" className="hover:text-accent transition-colors">
                  {t('footer.solutions')}
                </Link>
              </li>
              <li>
                <Link href="/cariere" className="hover:text-accent transition-colors">
                  {t('footer.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li>
                <Link href="/stiri" className="hover:text-accent transition-colors">
                  {t('footer.news')}
                </Link>
              </li>
              <li>
                <Link href="/compania/certificari" className="hover:text-accent transition-colors">
                  {t('footer.certifications')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>{t('footer.email')}: office@radcom.ro</li>
              <li>{t('footer.phone')}: 021 232 1039</li>
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
      </div>

      {/* Extended Footer Section - Company Description, Facebook, Contact */}
      <div className="bg-[#1a3d7a] border-t border-primary-foreground/10">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo-white.png" 
                  alt="RADCOM Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {t('footer.companyDescription')}
              </p>
            </div>

            {/* Facebook Page Embed */}
            <div className="flex justify-center">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-[340px]">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRadcomRomania&tabs&width=340&height=180&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="180"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Rapid */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">{t('footer.quickContact')}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="font-semibold">{t('footer.address')}:</span>{" "}
                  <span className="text-primary-foreground/80">
                    {t('footer.addressFull')}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">{t('footer.phone')}:</span>{" "}
                  <a href="tel:0212321039" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    021 232 1039
                  </a>
                </li>
                <li>
                  <span className="font-semibold">{t('footer.email')}:</span>{" "}
                  <a href="mailto:office@radcom.ro" className="text-accent hover:text-accent-hover transition-colors">
                    office@radcom.ro
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Policies and EU Logos */}
      <div className="bg-[#0f2d5e] border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left: Policies and Copyright */}
            <div className="text-sm text-primary-foreground/70 text-center md:text-left">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-2">
                <Link href="/politica-cookie" className="hover:text-accent transition-colors">
                  {t('footer.cookiePolicy')}
                </Link>
                <span>|</span>
                <Link href="/politica-confidentialitate" className="hover:text-accent transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </div>
              <p className="text-xs">
                {t('footer.euDisclaimer')}
              </p>
              <p className="text-xs mt-1">©{currentYear} RADCOM</p>
            </div>

            {/* Right: EU Logos */}
            <div className="flex items-center gap-6">
              <img 
                src="/official-logos/eu-flag.jpg" 
                alt="Uniunea Europeană" 
                className="h-12 w-auto opacity-90"
              />
              <img 
                src="/official-logos/guvernul-romaniei.jpg" 
                alt="Guvernul României" 
                className="h-12 w-auto opacity-90"
              />
              <img 
                src="/official-logos/fonduri-europene.png" 
                alt="Fonduri Europene" 
                className="h-12 w-auto opacity-90"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-primary-foreground/60">
              {t('footer.euInfo')}{" "}
              <a href="https://www.fonduri-ue.ro" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                www.fonduri-ue.ro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
