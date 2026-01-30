"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";
import { getCopy } from "../lib/site-copy";

export function Footer() {
  const pathname = usePathname();
  const lang = getLocaleFromPath(pathname);
  const copy = getCopy(lang);
  const footer = copy.footer;

  return (
    <footer className="radcom-footer">
      <div className="footer-top">
        <div className="container footer-top-grid">
          <div className="footer-brand">
            <img src="/logo-white.png" alt="RADCOM Logo" className="footer-logo" />
            <p>{footer.companyDescription}</p>
          </div>

          <div className="footer-social">
            <div className="footer-facebook">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRadcomRomania&tabs&width=360&height=190&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="360"
                height="190"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page"
              ></iframe>
            </div>
          </div>

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
            <div className="footer-links">
              <a href={withLocalePath("/politica-cookie", lang)}>
                {footer.cookiePolicy}
              </a>
              <span>|</span>
              <a
                href={withLocalePath("/politica-confidentialitate", lang)}
              >
                {footer.privacyPolicy}
              </a>
            </div>
            <p className="footer-note">{footer.euDisclaimer}</p>
            <p className="footer-copyright">©2026 RADCOM</p>
          </div>
          <div className="footer-bottom-right">
            <img
              src="/official-logos/eu-flag.jpg"
              alt="Uniunea Europeană"
            />
            <img
              src="/official-logos/guvernul-romaniei.jpg"
              alt="Guvernul României"
            />
            <img
              src="/official-logos/fonduri-europene.png"
              alt="Fonduri Europene"
            />
          </div>
        </div>
        <div className="container footer-info">
          <p>
            {footer.euInfo}{" "}
            <a
              href="https://www.fonduri-ue.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.fonduri-ue.ro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
