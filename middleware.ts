// middleware.ts
//
// Returns HTTP 410 Gone for URLs from a previous, over-expanded iteration of
// this site. 410 is more decisive than 404: Google drops 410s from the index
// promptly, while 404s sit in soft-404 limbo for weeks.
//
// Culled 2026-06-09:
//   Service x location combo URLs (/services/{svc}/{area}/) — 105 templated
//   doorway pages (5 services x 21 Harrow areas). Each was the same five
//   paragraph templates with the area name/postcode/price swapped in, so they
//   were thin near-duplicates. The route, its component, and its data file
//   were deleted; this 410s any that were indexed.
//
// The two-segment service hubs (/services/{slug}/) and the Harrow area spokes
// (/harrow/{area}/) remain real, hand-written pages and are left untouched.

import { NextRequest, NextResponse } from 'next/server';

// Currently valid service folders (mirror of data/services.ts).
const VALID_SERVICE_SLUGS = new Set<string>([
  'residential-lettings-management',
  'tenant-find-letting',
  'block-management',
  'hmo-management',
  'rent-collection-accounting',
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // /services/{svc}/{area}/ — combo route deleted. 410 unconditionally.
  if (/^\/services\/[^\/]+\/[^\/]+\/?$/.test(pathname)) {
    return new NextResponse('Gone', { status: 410 });
  }

  // /services/{slug}/ — 410 anything that isn't a current service hub.
  const serviceMatch = pathname.match(/^\/services\/([^\/]+)\/?$/);
  if (serviceMatch && !VALID_SERVICE_SLUGS.has(serviceMatch[1])) {
    return new NextResponse('Gone', { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/services/:path*'],
};
