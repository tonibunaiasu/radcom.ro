"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";

const translations = {
  en: {
    nav: {
      company: "Company",
      services: "Services",
      solutions: "Solutions",
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
      company: "Compania",
      services: "Servicii",
      solutions: "Soluții",
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
    {
      title: t.nav.company,
      href: "/compania",
      items: [
        { title: t.nav.about, href: "/compania/despre" },
        { title: t.nav.team, href: "/compania/echipa" },
        { title: t.nav.certifications, href: "/compania/certificari" }
      ]
    },
    {
      title: t.nav.services,
      href: "/servicii",
      items: [
        { title: "iFleet", href: "/servicii/ifleet" },
        { title: "OptiFare", href: "/servicii/optifare" },
        { title: "eXact", href: "/servicii/exact" }
      ]
    },
    {
      title: t.nav.solutions,
      href: "/solutii",
      items: [
        { title: "Transport", href: "/solutii/transport" },
        { title: "Medical", href: "/solutii/medical" },
        { title: "Telecom", href: "/solutii/telecom" },
        { title: "Media & Mobile", href: "/solutii/media-mobile" },
        { title: "Internet", href: "/solutii/internet" }
      ]
    },
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
            <div className="nav-group" key={item.title}>
              <a className="nav-link" href={withLocalePath(item.href, lang)}>
                {item.title}
              </a>
              {item.items && (
                <div className="nav-dropdown">
                  {item.items.map((subItem) => (
                    <a key={subItem.href} href={withLocalePath(subItem.href, lang)}>
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="lang-switcher">
            <button type="button" className="lang-trigger">
              {lang.toUpperCase()}
            </button>
            <div className="lang-menu">
              <a href={withLocalePath(pathname, "en")}>EN</a>
              <a href={withLocalePath(pathname, "ro")}>RO</a>
            </div>
          </div>
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
              <div key={item.title} className="mobile-section">
                <a className="mobile-link" href={withLocalePath(item.href, lang)}>
                  {item.title}
                </a>
                {item.items && (
                  <div className="mobile-sub">
                    {item.items.map((subItem) => (
                      <a key={subItem.href} href={withLocalePath(subItem.href, lang)}>
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="lang-switcher mobile-lang">
              <button type="button" className="lang-trigger">
                {lang.toUpperCase()}
              </button>
              <div className="lang-menu">
                <a href={withLocalePath(pathname, "en")}>EN</a>
                <a href={withLocalePath(pathname, "ro")}>RO</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
