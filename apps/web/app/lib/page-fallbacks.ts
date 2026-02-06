import { Locale } from "./locale";
import { buildCookieBody, buildPrivacyBody, getCopy } from "./site-copy";

const common = {
  companyBodyRo: [
    "RADCOM este o societate privată de telecomunicații înființată în anul 1993.",
    "În 1998, RADCOM a aderat la standardul de calitate ISO 9001.",
    "RADCOM este distribuitor național de produse și servicii de telefonie fixă și mobilă."
  ].join("\n\n"),
  companyBodyEn: [
    "RADCOM este o societate privată de telecomunicații înființată în anul 1993.",
    "În 1998, RADCOM a aderat la standardul de calitate ISO 9001.",
    "RADCOM este distribuitor național de produse și servicii de telefonie fixă și mobilă."
  ].join("\n\n"),
  certificationsRo: [
    "ISO 9001:2015 — Certificare pentru Sistemul de Management al Calității.",
    "ISO 27001:2013 — Certificare pentru Sistemul de Management al Securității Informației.",
    "Top 3 Companii IT România — Recunoaștere pentru excelență.",
    "Microsoft Gold Partner — Parteneriat de nivel superior."
  ].join("\n\n"),
  certificationsEn: [
    "SR EN ISO 9001:2015",
    "SR EN ISO 14001:2015",
    "SR OHSAS 18001:2008",
    "SR EN ISO/IEC 27001:2018",
    "ISO/IEC 20000-1:2011"
  ].join("\n\n")
};

const fallbacks = {
  en: {
    compania: {
      title: "RADCOM Company",
      summary: "Istoric, profil și certificări RADCOM.",
      body: common.companyBodyEn
    },
    "compania-despre": {
      title: "About RADCOM",
      summary: "Profilul companiei și repere esențiale.",
      body: common.companyBodyEn
    },
    "compania-echipa": {
      title: "RADCOM Team",
      summary: "Dedicated professionals who deliver results.",
      body: "Team information will be published soon."
    },
    "compania-certificari": {
      title: "Certifications and Awards",
      summary: "Standards and partnerships that confirm service quality.",
      body: common.certificationsEn
    },
    cariere: {
      title: "Careers at RADCOM",
      summary: "Join our team and build the future of technology together.",
      body: "We offer a stimulating workplace and competitive benefits."
    },
    articole: {
      title: "Articles & News",
      summary: "Latest updates, articles and insights.",
      body: "Editorial content will be published after CMS integration."
    },
    contact: {
      title: "Contact us",
      summary: "We are here to answer your questions and discuss your project.",
      body: "Send us a message and we’ll get back quickly."
    },
    "politica-cookie": {
      title: getCopy("en").cookiePolicy.title,
      summary: `${getCopy("en").cookiePolicy.lastUpdated}: January 29, 2026`,
      body: buildCookieBody("en")
    },
    "politica-confidentialitate": {
      title: getCopy("en").privacyPolicy.title,
      summary: `${getCopy("en").privacyPolicy.lastUpdated}: January 29, 2026`,
      body: buildPrivacyBody("en")
    },
    premii: {
      title: "Awards & Certifications",
      summary: "Recognition and certifications.",
      body: common.certificationsEn
    },
    recomandari: {
      title: "Testimonials",
      summary: "Client recommendations and feedback.",
      body: "Client testimonials will be published soon."
    }
  },
  ro: {
    compania: {
      title: "Compania RADCOM",
      summary: "Istoric, profil și certificări RADCOM.",
      body: common.companyBodyRo
    },
    "compania-despre": {
      title: "Despre RADCOM",
      summary: "Profilul companiei și repere esențiale.",
      body: common.companyBodyRo
    },
    "compania-echipa": {
      title: "Echipa RADCOM",
      summary: "Profesioniști dedicați care transformă viziuni în realitate.",
      body: "Informațiile despre echipă vor fi disponibile în curând."
    },
    "compania-certificari": {
      title: "Certificări și premii",
      summary: "Standardele și parteneriatele RADCOM confirmă calitatea serviciilor.",
      body: common.certificationsRo
    },
    cariere: {
      title: "Cariere la RADCOM",
      summary: "Alătură-te echipei noastre și construiește viitorul tehnologiei împreună cu noi.",
      body: "Oferim un mediu de lucru stimulant și beneficii competitive."
    },
    articole: {
      title: "Articole & Știri",
      summary: "Ultimele noutăți, articole și insights din lumea tehnologiei.",
      body: "Conținutul editorial va fi publicat după integrarea CMS-ului."
    },
    contact: {
      title: "Contactează-ne",
      summary: "Suntem aici pentru a răspunde întrebărilor tale și a discuta despre proiectul tău.",
      body: "Trimite-ne un mesaj și revenim rapid."
    },
    "politica-cookie": {
      title: getCopy("ro").cookiePolicy.title,
      summary: `${getCopy("ro").cookiePolicy.lastUpdated}: 29 ianuarie 2026`,
      body: buildCookieBody("ro")
    },
    "politica-confidentialitate": {
      title: getCopy("ro").privacyPolicy.title,
      summary: `${getCopy("ro").privacyPolicy.lastUpdated}: 29 ianuarie 2026`,
      body: buildPrivacyBody("ro")
    },
    premii: {
      title: "Premii & Certificări",
      summary: "Recunoaștere și certificări.",
      body: common.certificationsRo
    },
    recomandari: {
      title: "Recomandări",
      summary: "Recomandări și feedback de la clienți.",
      body: "Testimonialele clienților vor fi publicate în curând."
    }
  }
} as const;

export function getPageFallback(slug: string, locale: Locale) {
  return (
    fallbacks[locale][slug as keyof typeof fallbacks.en] ||
    fallbacks.en[slug as keyof typeof fallbacks.en]
  );
}
