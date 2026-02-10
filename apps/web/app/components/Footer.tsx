"use client";

import { useParams, usePathname } from "next/navigation";
import { getLocaleFromPath, normalizeLocale, withLocalePath } from "../lib/locale";
import { getCopy } from "../lib/site-copy";

export function Footer() {
  const pathname = usePathname();
  const params = useParams();
  const paramLang =
    typeof params?.lang === "string"
      ? params.lang
      : Array.isArray(params?.lang)
      ? params?.lang?.[0]
      : undefined;
  const lang = paramLang ? normalizeLocale(paramLang) : getLocaleFromPath(pathname);
  const copy = getCopy(lang);
  const footer = copy.footer;
  const adminLoginURL = `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001"}/admin/login`;
  const disclaimerMarker = "obligatoriu";
  const disclaimerParts =
    lang === "ro" && footer.euDisclaimer.includes(disclaimerMarker)
      ? footer.euDisclaimer.split(disclaimerMarker)
      : null;
  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com/RadcomRomania" },
    { label: "Facebook", href: "https://www.facebook.com/RadcomRomania" },
    { label: "Instagram", href: "https://www.instagram.com/radcom.ro/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/radcom-romania/" }
  ];

  return (
    <>
      <footer className="radcom-footer">
      <div className="footer-top">
        <div className="container footer-top-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img
                src="/logo-white.webp"
                alt="RADCOM Logo"
                className="footer-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="footer-social-links footer-social-top">
              <p className="footer-social-title">{footer.followUs}</p>
              <div className="footer-social-buttons">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    className="footer-social-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav className="footer-menu footer-menu-top">
            <a href={withLocalePath("/", lang)}>
              {lang === "ro" ? "Acasă" : "Home"}
            </a>
            <a href={withLocalePath("/compania", lang)}>
              {lang === "ro" ? "Despre noi" : "About us"}
            </a>
            <a href={withLocalePath("/servicii", lang)}>
              {lang === "ro" ? "Servicii" : "Services"}
            </a>
            <a href={withLocalePath("/articole", lang)}>
              {lang === "ro" ? "Articole" : "Articles"}
            </a>
            <a href={withLocalePath("/contact", lang)}>
              {lang === "ro" ? "Contact" : "Contact"}
            </a>
            <a href={withLocalePath("/politica-cookie", lang)}>
              {footer.cookiePolicy}
            </a>
            <a href={withLocalePath("/politica-confidentialitate", lang)}>
              {footer.privacyPolicy}
            </a>
          </nav>

          <div className="footer-contact">
            <h4>{footer.quickContact}</h4>
            <p>
              <strong>{lang === "ro" ? "Adresa:" : "Address:"}</strong>{" "}
              {footer.addressFull}
            </p>
            <p>
              <strong>{lang === "ro" ? "Telefon:" : "Phone:"}</strong>{" "}
              <a href="tel:0212321039">021 232 1039</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:office@radcom.ro">office@radcom.ro</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <div className="footer-bottom-left">
            <p className="footer-note">
              {disclaimerParts ? (
                <>
                  {disclaimerParts[0]}
                  <a
                    className="footer-cms-link-inline"
                    href={adminLoginURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {disclaimerMarker}
                  </a>
                  {disclaimerParts[1]}
                </>
              ) : (
                footer.euDisclaimer
              )}
            </p>
            <p className="footer-eu-info">
              {footer.euInfo}{" "}
              <a
                href="https://www.fonduri-ue.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.fonduri-ue.ro
              </a>
            </p>
            <p className="footer-copyright">©2026 RADCOM</p>
          </div>
          <div className="footer-bottom-center">
            <div className="footer-bottom-logos">
              <img
                src="/official-logos/eu-flag.webp"
                alt={lang === "ro" ? "Uniunea Europeană" : "European Union"}
                loading="lazy"
                decoding="async"
              />
              <img
                src="/official-logos/guvernul-romaniei.webp"
                alt={lang === "ro" ? "Guvernul României" : "Government of Romania"}
                loading="lazy"
                decoding="async"
              />
              <img
                src="/official-logos/fonduri-europene.webp"
                alt={lang === "ro" ? "Fonduri Europene" : "European Funds"}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="footer-bottom-right">
            <p className="footer-brand-description">{footer.companyDescription}</p>
          </div>
        </div>
      </div>
    </footer>
    <div className="mobile-cta">
      <a className="mobile-cta-button" href={withLocalePath("/contact", lang)}>
        {lang === "ro" ? "Solicită o discuție" : "Request a discussion"}
      </a>
      <a className="mobile-cta-link" href="tel:+40212321039">
        {lang === "ro" ? "Sună acum" : "Call now"}
      </a>
    </div>
    </>
  );
}
