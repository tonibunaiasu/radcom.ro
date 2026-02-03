"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";

const translations = {
  en: {
    nav: {
      home: "Home",
      company: "About us",
      services: "Services",
      solutions: "Industries",
      careers: "Careers",
      articles: "Articles",
      contact: "Contact",
      about: "About",
      team: "Team",
      certifications: "Certifications"
    }
  },
  ro: {
    nav: {
      home: "Acasă",
      company: "Despre noi",
      services: "Servicii",
      solutions: "Industrii",
      careers: "Cariere",
      articles: "Articole",
      contact: "Contact",
      about: "Despre",
      team: "Echipă",
      certifications: "Certificări"
    }
  }
} as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const lang = getLocaleFromPath(pathname);
  const t = translations[lang];

  const menu = [
    { title: t.nav.home, href: "/" },
    {
      title: t.nav.company,
      href: "/compania"
    },
    { title: t.nav.services, href: "/servicii" },
    { title: t.nav.solutions, href: "/industries" },
    { title: t.nav.careers, href: "/cariere" },
    { title: t.nav.articles, href: "/articole" },
    { title: t.nav.contact, href: "/contact" }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={withLocalePath("/", lang)}>
          <img src="/logo-blue.png" alt="RADCOM" />
        </a>
        <nav className="nav">
          {menu.map((item) => (
            <a className="nav-link" key={item.href} href={withLocalePath(item.href, lang)}>
              {item.title}
            </a>
          ))}
          <a
            className="lang-toggle"
            href={withLocalePath(pathname, lang === "en" ? "ro" : "en")}
          >
            {lang === "en" ? "RO" : "EN"}
          </a>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "Închide" : "Meniu"}
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container">
            {menu.map((item) => (
              <div key={item.href} className="mobile-section">
                <a className="mobile-link" href={withLocalePath(item.href, lang)}>
                  {item.title}
                </a>
              </div>
            ))}
            <a
              className="lang-toggle mobile-lang"
              href={withLocalePath(pathname, lang === "en" ? "ro" : "en")}
            >
              {lang === "en" ? "RO" : "EN"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
