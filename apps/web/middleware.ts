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

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

const normalizeHost = (host: string | null) => {
  if (!host) return "";
  const trimmed = host.trim().toLowerCase();
  if (trimmed.startsWith("[")) {
    const end = trimmed.indexOf("]");
    return end >= 0 ? trimmed.slice(1, end) : trimmed;
  }
  const colonIndex = trimmed.indexOf(":");
  return colonIndex >= 0 ? trimmed.slice(0, colonIndex) : trimmed;
};

const isLocalHost = (host: string | null) => {
  const normalized = normalizeHost(host);
  if (!normalized) return false;
  return LOCAL_HOSTS.has(normalized);
};

/** Build the public origin (e.g. https://dezign.institute) when behind a proxy so redirects don't send users to 127.0.0.1 */
function getRedirectOrigin(request: NextRequest): { origin: string; source: string } {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  if (forwardedHost && forwardedProto) {
    const host = forwardedHost.split(",")[0]?.trim() ?? "";
    const proto = forwardedProto.split(",")[0]?.trim()?.toLowerCase() ?? "https";
    if (host && !isLocalHost(host) && (proto === "http" || proto === "https")) {
      return { origin: `${proto}://${host}`, source: "x-forwarded" };
    }
    if (host && isLocalHost(host)) {
      // keep going, but record that x-forwarded was local
      const fallbacks = buildFallbackOrigin(request);
      return { origin: fallbacks.origin, source: `x-forwarded-local->${fallbacks.source}` };
    }
  }
  return buildFallbackOrigin(request);
}

function buildFallbackOrigin(request: NextRequest): { origin: string; source: string } {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const siteUrl = process.env.SITE_URL;
  if (siteUrl) {
    try {
      const u = new URL(siteUrl);
      if (!isLocalHost(u.hostname)) return { origin: u.origin, source: "site-url" };
    } catch {
      // ignore invalid SITE_URL
    }
  }
  const hostHeader = request.headers.get("host");
  if (hostHeader && !isLocalHost(hostHeader)) {
    const proto = forwardedProto?.split(",")[0]?.trim()?.toLowerCase() ?? request.nextUrl.protocol.replace(":", "");
    if (proto === "http" || proto === "https") return { origin: `${proto}://${hostHeader}`, source: "host-header" };
  }
  return { origin: request.nextUrl.origin, source: "next-url" };
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/") return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const preferred = cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale as (typeof SUPPORTED_LOCALES)[number])
    ? cookieLocale
    : parsePreferredLocale(request.headers.get("accept-language"));
  const locale = preferred || DEFAULT_LOCALE;
  const { origin, source } = getRedirectOrigin(request);
  {
    const forwardedHost = request.headers.get("x-forwarded-host");
    const forwardedProto = request.headers.get("x-forwarded-proto");
    const hostHeader = request.headers.get("host");
    const isLocalOrigin = isLocalHost(new URL(origin).hostname);
    if (isLocalOrigin) {
      console.log(
        `[middleware] redirect origin (${source}) -> ${origin} | ` +
          `x-forwarded-host=${forwardedHost ?? ""} ` +
          `x-forwarded-proto=${forwardedProto ?? ""} ` +
          `host=${hostHeader ?? ""} ` +
          `site_url=${process.env.SITE_URL ?? ""}`
      );
    }
  }
  const url = new URL(`/${locale}`, origin);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"]
};
