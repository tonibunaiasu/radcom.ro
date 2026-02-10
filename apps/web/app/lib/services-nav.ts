export const servicesLinks = {
  en: [
    { label: "iFleet", href: "/servicii/ifleet" },
    { label: "OptiFare", href: "/servicii/optifare" },
    { label: "eXact", href: "/servicii/exact" },
    { label: "All services", href: "/servicii" }
  ],
  ro: [
    { label: "iFleet", href: "/servicii/ifleet" },
    { label: "OptiFare", href: "/servicii/optifare" },
    { label: "eXact", href: "/servicii/exact" },
    { label: "Toate serviciile", href: "/servicii" }
  ]
};

export const servicesBreadcrumbs = (locale: "ro" | "en", currentLabel: string) => [
  { label: locale === "ro" ? "Acasă" : "Home", href: `/${locale}` },
  { label: locale === "ro" ? "Servicii" : "Services", href: `/${locale}/servicii` },
  { label: currentLabel }
];
