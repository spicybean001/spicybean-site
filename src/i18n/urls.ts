import { locales } from "./routing";

export const SITE_URL = "https://spicybean.net";

/**
 * Path prefix for a locale under next-intl `localePrefix: "as-needed"`:
 * the default locale ("en") is served without a prefix, other locales get "/<locale>".
 *
 * Canonical, hreflang and sitemap URLs must go through this helper so they never
 * point at a URL that 307-redirects — Google drops canonical/hreflang signals that
 * target a redirect and reports those sitemap URLs as "Page with redirect".
 */
export function localePrefix(locale: string): string {
  return locale === "en" ? "" : `/${locale}`;
}

/** Absolute, canonical URL for a locale + path. */
export function localeUrl(locale: string, path = ""): string {
  return `${SITE_URL}${localePrefix(locale)}${path}`;
}

/** hreflang map for a path, including x-default (default locale, unprefixed). */
export function languageAlternates(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = localeUrl(loc, path);
  }
  languages["x-default"] = localeUrl("en", path);
  return languages;
}
