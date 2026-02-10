"use client";

import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { getLocaleFromPath, normalizeLocale, withLocalePath } from "../lib/locale";

const translations = {
  en: {
    nav: {
      home: "Home",
      company: "About us",
      services: "Services",
      careers: "Careers",
      articles: "Articles",
      contact: "Contact",
      about: "About",
      team: "Team",
      certifications: "Certifications"
    },
    menu: {
      open: "Menu",
      close: "Close"
    },
    cta: "Request a discussion"
  },
  ro: {
    nav: {
      home: "Acasă",
      company: "Despre noi",
      services: "Servicii",
      careers: "Cariere",
      articles: "Articole",
      contact: "Contact",
      about: "Despre",
      team: "Echipă",
      certifications: "Certificări"
    },
    menu: {
      open: "Meniu",
      close: "Închide"
    },
    cta: "Solicită o discuție"
  }
} as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const paramLang =
    typeof params?.lang === "string"
      ? params.lang
      : Array.isArray(params?.lang)
      ? params?.lang?.[0]
      : undefined;
  const lang = paramLang ? normalizeLocale(paramLang) : getLocaleFromPath(pathname);
  const t = translations[lang];
  const nextLang = lang === "en" ? "ro" : "en";

  const setLangCookie = (value: string) => {
    document.cookie = `radcom_lang=${value};path=/;max-age=31536000`;
  };

  const menu = [
    { title: t.nav.home, href: "/" },
    {
      title: t.nav.company,
      href: "/compania"
    },
    { title: t.nav.services, href: "/servicii" },
    { title: t.nav.careers, href: "/cariere" },
    { title: t.nav.articles, href: "/articole" }
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={withLocalePath("/", lang)}>
          <img src="/logo-blue.png" alt="RADCOM" decoding="async" />
        </a>
        <nav className="nav">
          {menu.map((item) => (
            <a className="nav-link" key={item.href} href={withLocalePath(item.href, lang)}>
              {item.title}
            </a>
          ))}
          <a className="nav-cta" href={withLocalePath("/contact", lang)}>
            {t.cta}
          </a>
          <a
            className="lang-toggle"
            href={withLocalePath(pathname, nextLang)}
            onClick={() => setLangCookie(nextLang)}
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
          {mobileOpen ? t.menu.close : t.menu.open}
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
            <div className="mobile-section">
              <a className="nav-cta" href={withLocalePath("/contact", lang)}>
                {t.cta}
              </a>
            </div>
            <a
              className="lang-toggle mobile-lang"
              href={withLocalePath(pathname, nextLang)}
              onClick={() => setLangCookie(nextLang)}
            >
              {lang === "en" ? "RO" : "EN"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
