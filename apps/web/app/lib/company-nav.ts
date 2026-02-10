export const companyLinks = {
  en: [
    { label: "Mission", href: "/compania/misiune" },
    { label: "Vision", href: "/compania/viziune" },
    { label: "Values", href: "/compania/valori" },
    { label: "History", href: "/compania/istoric" },
    { label: "Team", href: "/compania/echipa" },
    { label: "Certifications", href: "/compania/certificari" }
  ],
  ro: [
    { label: "Misiune", href: "/compania/misiune" },
    { label: "Viziune", href: "/compania/viziune" },
    { label: "Valori", href: "/compania/valori" },
    { label: "Istoric", href: "/compania/istoric" },
    { label: "Echipă", href: "/compania/echipa" },
    { label: "Certificări", href: "/compania/certificari" }
  ]
};

export const companyBreadcrumbs = (locale: "ro" | "en", currentLabel: string) => [
  { label: locale === "ro" ? "Acasă" : "Home", href: `/${locale}` },
  { label: locale === "ro" ? "Compania" : "Company", href: `/${locale}/compania` },
  { label: currentLabel }
];
