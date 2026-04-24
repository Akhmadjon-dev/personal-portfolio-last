import en from './en.json';
import ru from './ru.json';
import uz from './uz.json';

export const locales = ['en', 'ru', 'uz'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const dictionaries = { en, ru, uz } as const;
export type Dictionary = typeof en;

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (locales.includes(first as Locale)) return first as Locale;
  return defaultLocale;
}

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  if (clean === '/') return `/${locale}/`;
  return `/${locale}${clean}`;
}

export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}
