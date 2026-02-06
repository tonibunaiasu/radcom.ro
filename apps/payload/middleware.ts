import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * When the CMS is behind a proxy, requests may hit the app with host 127.0.0.1/localhost.
 * Redirect to the public domain (PAYLOAD_PUBLIC_SERVER_URL) so the admin opens on the real URL
 * and no further redirects point to 127.0.0.1.
 */
export function middleware(request: NextRequest) {
  const publicUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL
  if (!publicUrl) return NextResponse.next()

  let publicOrigin: string
  try {
    publicOrigin = new URL(publicUrl).origin
  } catch {
    return NextResponse.next()
  }

  const targetOrigin = new URL(publicUrl).origin
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim()
  if (forwardedHost && forwardedHost === new URL(publicUrl).host) {
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
  url.protocol = new URL(publicUrl).protocol
  url.host = new URL(publicUrl).host
  return NextResponse.redirect(url, 307)
}

export const config = {
  matcher: ['/admin', '/admin/(.*)', '/api/(.*)'],
}
