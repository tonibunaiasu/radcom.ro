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

/** Build the public origin (e.g. https://dezign.institute) when behind a proxy so redirects don't send users to 127.0.0.1 */
function getRedirectOrigin(request: NextRequest): string {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (forwardedHost && forwardedProto) {
    const host = forwardedHost.split(",")[0]?.trim() ?? "";
    const proto = forwardedProto.split(",")[0]?.trim()?.toLowerCase() ?? "https";
    if (host && (proto === "http" || proto === "https")) return `${proto}://${host}`;
  }
  const siteUrl = process.env.SITE_URL;
  if (siteUrl) {
    try {
      const u = new URL(siteUrl);
      return u.origin;
    } catch {
      // ignore invalid SITE_URL
    }
  }
  return request.nextUrl.origin;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as (typeof SUPPORTED_LOCALES)[number])
    ? cookieLocale
    : parsePreferredLocale(request.headers.get("accept-language"));
  const locale = preferred || DEFAULT_LOCALE;
  const origin = getRedirectOrigin(request);
  const url = new URL(`/${locale}`, origin);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"]
};
