import { type NextRequest, NextResponse } from 'next/server';

import { i18nMiddleware } from './i18n/middleware';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|fonts|favicon.ico|sw.js|site.webmanifest).*)',
  ],
};

// Skip MW for paths containing 'chrome' or 'icon'
function shouldSkipMiddleware(pathname: string) {
  return (
    pathname.includes('icon') || pathname.includes('chrome')
  );
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (shouldSkipMiddleware(pathname)) {
    return NextResponse.next();
  }

  const i18Response = i18nMiddleware(req);

  if (i18Response) {
    return i18Response;
  }

  return NextResponse.next();
}
