"use client";

import { useParams, usePathname } from "next/navigation";
import { getLocaleFromPath, normalizeLocale } from "../lib/locale";

export function NotFoundContent() {
  const pathname = usePathname();
  const params = useParams();
  const paramLang =
    typeof params?.lang === "string"
      ? params.lang
      : Array.isArray(params?.lang)
      ? params?.lang?.[0]
      : undefined;
  const locale = paramLang ? normalizeLocale(paramLang) : getLocaleFromPath(pathname);

  const title = locale === "ro" ? "Pagina nu a fost găsită" : "Page not found";
  const lead =
    locale === "ro"
      ? "Link-ul accesat nu există. Înapoi la homepage."
      : "The requested link does not exist. Back to homepage.";
  const button = locale === "ro" ? "Acasă" : "Home";
  const href = locale === "ro" ? "/ro" : "/en";

  return (
    <>
      <h1 className="section-title">{title}</h1>
      <p className="section-lead">{lead}</p>
      <a className="product-cta" href={href}>
        {button}
      </a>
    </>
  );
}
