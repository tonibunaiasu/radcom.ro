export type Locale = "en" | "ro";

export function normalizeLocale(value?: string | null): Locale {
  return value === "ro" ? "ro" : "en";
}

export function getLocale(
  params?: { lang?: string }
): Locale {
  const raw = params?.lang;
  if (Array.isArray(raw)) return normalizeLocale(raw[0]);
  return normalizeLocale(raw);
}

export function getLocaleFromPath(pathname?: string | null): Locale {
  if (!pathname) return "en";
  return pathname.startsWith("/ro") ? "ro" : "en";
}

export function withLocalePath(pathname: string, locale: Locale) {
  const clean = pathname.replace(/^\/(en|ro)(?=\/|$)/, "");
  const normalized = clean === "" ? "/" : clean;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}
