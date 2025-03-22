import { type NextRequest, NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';

import {
  languages as langs,
  fallbackLng,
  cookieName,
} from '@/i18n/settings';
import { Locales } from '@/i18n/types';

const languages = langs as unknown as Locales[];

acceptLanguage.languages(languages);

// Checks if pathname starts with a supported locale
function isSupportedLangPath(
  pathname: string,
  languages: Locales[],
) {
  return languages.some((l) => pathname.startsWith(`/${l}`));
}

// Checks if pathname is a Next.js internal path
function isNextInternalPath(pathname: string) {
  return pathname.startsWith('/_next');
}

// Gets the preferred language
function getPreferredLanguage(req: NextRequest) {
  let lang: string | undefined | null;

  // Get language from cookie
  if (req.cookies.has(cookieName)) {
    const langCookie = req.cookies.get(cookieName)?.value;
    lang = acceptLanguage.get(langCookie);
  }

  // Get language from Accept-Language header
  if (!lang) {
    const langHeader = req.headers.get('Accept-Language');
    lang = acceptLanguage.get(langHeader);
  }

  return lang || fallbackLng;
}

export const i18nMiddleware = (req: NextRequest) => {
  const { pathname, search } = req.nextUrl;

  const lang = getPreferredLanguage(req);

  // Redirect if lang in path is not supported
  if (
    !isSupportedLangPath(pathname, languages) &&
    !isNextInternalPath(pathname)
  ) {
    const response = NextResponse.redirect(
      new URL(`/${lang}${pathname}${search}`, req.url),
    );

    return response;
  }

  // Set language cookie based on referer
  if (req.headers.has('referer')) {
    const referer = req.headers.get('referer');
    const refererUrl = new URL(referer || '');

    const langInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`),
    );

    const response = NextResponse.next();

    response.cookies.set(
      cookieName,
      langInReferer || fallbackLng,
    );

    return response;
  }

  return null;
};
