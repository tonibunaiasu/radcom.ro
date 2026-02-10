import { Locale } from "./locale";
import { buildCookieBody, buildPrivacyBody, getCopy } from "./site-copy";

const common = {
  companyBodyRo: [
    "RADCOM aduce viitorul mobilității urbane prin tehnologii integrate, construite pentru fiabilitate și scalare.",
    "",
    "Conectăm oameni, operatori și infrastructuri în orașe moderne.",
    "",
    "> „Unii furnizori livrează tehnologii. La RADCOM livrăm viitorul mobilității urbane.”",
    "",
    "Explorează viziunea, misiunea și valorile care ne ghidează."
  ].join("\n\n"),
  companyBodyEn: [
    "RADCOM brings the future of urban mobility through integrated technologies built for reliability and scale.",
    "",
    "We connect people, operators, and infrastructure in modern cities.",
    "",
    "> “Some providers deliver technology. At RADCOM we deliver the future of urban mobility.”",
    "",
    "Explore our vision, mission, and values."
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
      summary: "RADCOM history, profile, and certifications.",
      body: common.companyBodyEn
    },
    "compania-istoric": {
      title: "RADCOM History",
      summary: "Key milestones and projects over the years.",
      body: ""
    },
    "compania-viziune": {
      title: "Our Vision",
      summary: "How we see the future of urban mobility.",
      body: [
        "We believe in a world where urban mobility is predictable, safe, and accessible to everyone.",
        "",
        "We imagine cities where technology connects people, not separates them.",
        "Where public transport outperforms the private car because it is intelligent, integrated, and well orchestrated.",
        "",
        "We want to redefine urban mobility standards in Romania:",
        "from fragmented systems to connected ecosystems, from improvisation to trusted critical infrastructure.",
        "",
        "Our vision is for RADCOM to be the technology partner that helps cities become faster, cleaner, and more human."
      ].join("\n\n")
    },
    "compania-misiune": {
      title: "Our Mission",
      summary: "What we build every day for operators and passengers.",
      body: [
        "We build technologies that bring the future of urban mobility closer.",
        "",
        "In every project, we listen to on-the-ground reality before proposing solutions.",
        "We understand flows, people, and operational constraints, then integrate systems that work together — hardware + software, without friction.",
        "",
        "Our mission is to deliver solutions that increase predictability, reduce operating costs, and improve the passenger experience.",
        "",
        "We don’t just deliver features. We deliver measurable outcomes."
      ].join("\n\n")
    },
    "compania-valori": {
      title: "Our Values & Principles",
      summary: "The principles behind every technical decision.",
      body: [
        "### Our values",
        "Every technical decision directly impacts people who depend on urban mobility. That’s why we follow clear values in everything we build.",
        "",
        "**Interoperability**",
        "Great systems aren’t islands. We build solutions that integrate and grow together.",
        "",
        "**Reliability**",
        "Urban mobility technology can’t afford to fail. We deliver stability, not just features.",
        "",
        "**Safety**",
        "We protect passengers and operators through robust, verifiable technologies.",
        "",
        "**Scalability**",
        "We design solutions that work for 10 vehicles and for 1,000.",
        "",
        "**Passenger-centered design**",
        "Everything starts with the real experience of people in the city.",
        "",
        "**Sustainability**",
        "We optimize resources and support mobility that reduces the urban footprint.",
        "",
        "### Our working principles",
        "Every project starts with the reality on the ground and ends with measurable results.",
        "",
        "**01 — We listen before we design**",
        "We understand flows, people, and operational context before any solution.",
        "",
        "**02 — Integration is the key**",
        "Disconnected systems create chaos. We build coherent ecosystems.",
        "",
        "**03 — Technical transparency**",
        "You know what you get, how it works, and the impact it has. No surprises.",
        "",
        "**04 — Quality without compromise**",
        "We’d rather say no than deliver below standard.",
        "",
        "**05 — Continuous evolution**",
        "We invest in technology, processes, and people to stay relevant."
      ].join("\n\n")
    },
    "compania-despre": {
      title: "About RADCOM",
      summary: "Company profile and key milestones.",
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
    "compania-istoric": {
      title: "Istoric RADCOM",
      summary: "Repere și proiecte cheie de-a lungul anilor.",
      body: ""
    },
    "compania-viziune": {
      title: "Viziunea noastră",
      summary: "Cum vedem viitorul mobilității urbane.",
      body: [
        "Credem într-o lume în care mobilitatea urbană este predictibilă, sigură și accesibilă pentru fiecare.",
        "",
        "Ne imaginăm orașe în care tehnologia conectează oameni, nu îi separă.",
        "Unde transportul public e mai eficient decât mașina personală, pentru că e inteligent, integrat și bine orchestrat.",
        "",
        "Vrem să redefinim standardele mobilității urbane în România:",
        "de la sisteme fragmentate la ecosisteme conectate, de la improvizații la infrastructură critică de încredere.",
        "",
        "Viziunea noastră este ca RADCOM să fie partenerul tehnologic care ajută orașele să devină mai rapide, mai curate și mai umane."
      ].join("\n\n")
    },
    "compania-misiune": {
      title: "Misiunea noastră",
      summary: "Ce construim în fiecare zi pentru operatori și pasageri.",
      body: [
        "Construim tehnologii care aduc viitorul mobilității urbane mai aproape.",
        "",
        "În fiecare proiect, ascultăm realitatea din teren înainte de a propune soluții.",
        "Înțelegem fluxurile, oamenii și constrângerile operaționale, apoi integrăm sisteme care funcționează împreună — hardware + software, fără fricțiuni.",
        "",
        "Misiunea noastră este să livrăm soluții care cresc predictibilitatea, reduc costurile operaționale și îmbunătățesc experiența pasagerului.",
        "",
        "Nu livrăm doar funcționalități. Livrăm rezultate măsurabile."
      ].join("\n\n")
    },
    "compania-valori": {
      title: "Valorile & Principiile noastre",
      summary: "Principiile din spatele fiecărei decizii tehnice.",
      body: [
        "### Valorile noastre",
        "Fiecare decizie tehnică are impact direct asupra oamenilor care depind de mobilitatea urbană. De aceea, ne ghidăm după valori clare în tot ceea ce construim.",
        "",
        "**Interoperabilitate**",
        "Sistemele bune nu sunt insule. Construim soluții care se integrează și cresc împreună.",
        "",
        "**Fiabilitate**",
        "Tehnologia pentru mobilitate urbană nu are voie să cedeze. Livrăm stabilitate, nu doar funcții.",
        "",
        "**Siguranță**",
        "Protejăm pasagerii și operatorii prin tehnologii robuste și verificabile.",
        "",
        "**Scalabilitate**",
        "Gândim soluții care funcționează la 10 vehicule și la 1.000.",
        "",
        "**Design centrat pe pasager**",
        "Totul pornește de la experiența reală a oamenilor în oraș.",
        "",
        "**Sustenabilitate**",
        "Optimizăm resursele și sprijinim mobilitatea care reduce amprenta urbană.",
        "",
        "### Principiile de lucru",
        "Fiecare proiect începe cu realitatea din teren și se termină cu rezultate măsurabile.",
        "",
        "**01 — Ascultăm înainte să proiectăm**",
        "Înțelegem fluxurile, oamenii și contextul operațional înainte de orice soluție.",
        "",
        "**02 — Integrarea e cheia**",
        "Sisteme disparate creează haos. Noi construim ecosisteme coerente.",
        "",
        "**03 — Transparență tehnică**",
        "Știi ce primești, cum funcționează și ce impact are. Fără surprize.",
        "",
        "**04 — Calitate fără compromis**",
        "Preferăm să spunem nu decât să livrăm sub standard.",
        "",
        "**05 — Evoluție continuă**",
        "Investim în tehnologie, procese și oameni pentru a rămâne relevanți."
      ].join("\n\n")
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
