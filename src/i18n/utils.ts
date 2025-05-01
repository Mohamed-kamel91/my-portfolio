import { languages, fallbackLng } from './settings';
import { Locales } from './types';

/**
 * Validates and returns the correct language to use
 * @param lang The input language to validate
 * @returns A validated language (either the input or fallback)
 */
export function getValidLang(lang: Locales): string {
  return languages.includes(lang) ? lang : fallbackLng;
}
