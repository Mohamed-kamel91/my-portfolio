'use client';

import { useEffect, useState } from 'react';
import i18next, { FlatNamespace, KeyPrefix } from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
  UseTranslationResponse,
  FallbackNs,
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useCookies } from 'react-cookie';

import { getOptions, languages, cookieName } from './settings';
import { useLanguage } from '@/features/language';

const isServer = typeof window === 'undefined';

// on client side the normal singleton is ok

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isServer ? languages : [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  lng: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);

  const { i18n } = ret;

  if (isServer && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: '/' });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lng, cookies.i18next]);
  }
  return ret;
}

export function useI18n(ns?: string) {
  const lang = useLanguage();
  const i18n = useTranslation(lang.currentLang, ns);
  return { ...i18n, ...lang };
}
