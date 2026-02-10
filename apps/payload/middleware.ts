import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * When the CMS is behind a proxy, requests may hit the app with host 127.0.0.1/localhost.
 * Redirect to the public domain (PAYLOAD_PUBLIC_SERVER_URL) so the admin opens on the real URL.
 * Set PAYLOAD_REDIRECT_TO_PUBLIC_URL=false to disable (e.g. if you get 502 or redirect loops).
 */
export function middleware(request: NextRequest) {
  try {
    if (process.env.PAYLOAD_REDIRECT_TO_PUBLIC_URL === 'false') {
      return NextResponse.next()
    }
    const publicUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL
    if (!publicUrl || !publicUrl.startsWith('http')) return NextResponse.next()

    let parsed: URL
    try {
      parsed = new URL(publicUrl)
    } catch {
      return NextResponse.next()
    }
    const targetOrigin = parsed.origin
    const targetHost = parsed.host

    const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim()
    if (forwardedHost && forwardedHost === targetHost) {
      return NextResponse.next()
    }
    const requestHost = request.nextUrl.hostname
    const isLocalHost =
      requestHost === '127.0.0.1' ||
      requestHost === 'localhost' ||
      requestHost === '::1'
    if (!isLocalHost || request.nextUrl.origin === targetOrigin) {
      return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    url.protocol = parsed.protocol
    url.host = targetHost
    return NextResponse.redirect(url, 307)
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/admin', '/admin/(.*)', '/api/(.*)'],
}
