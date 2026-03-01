import en from './en.json';
import es from './es.json';

const translations = { en, es };

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return translations[lang] || translations[defaultLang];
}

export function getStaticLangPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
