export const locales = ['es', 'en', 'fr', 'pt', 'de'] as const;
export const defaultLocale = 'es' as const;

export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  pt: 'Português',
  de: 'Deutsch'
};

export const siteConfig = {
  name: 'Open PRO',
  description: 'Build your next idea and ship your dream site',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
}; 