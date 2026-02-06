import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = ["en", "ro"] as const;
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "radcom_lang";

const parsePreferredLocale = (header: string | null) => {
  if (!header) return DEFAULT_LOCALE;
  const candidates = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    const base = candidate.split("-")[0];
    if (SUPPORTED_LOCALES.includes(base as (typeof SUPPORTED_LOCALES)[number])) {
      return base;
    }
  }
  return DEFAULT_LOCALE;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as (typeof SUPPORTED_LOCALES)[number])
    ? cookieLocale
    : parsePreferredLocale(request.headers.get("accept-language"));
  const locale = preferred || DEFAULT_LOCALE;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"]
};
