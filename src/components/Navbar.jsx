import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import Menu from '../icons/Menu.jsx';
import { isMovilMenuOpen } from '../movilMenu.js';
import { useTranslations, languages } from '../i18n/index.js';

const focusStyle = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-canvas';

function ThemeToggle({ label }) {
  // Each page visit starts in light mode; switching applies to this page only.
  const [dark, setDark] = useState(false);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
  };
  return (
    <button type="button" onClick={toggle} className={`p-2.5 rounded-lg text-gray-600 dark:text-night-body hover:bg-gray-100 dark:hover:bg-night-raised transition-colors ${focusStyle}`} aria-label={label} aria-pressed={dark} title={label}>
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {dark ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        )}
      </svg>
    </button>
  );
}

function LanguageSwitcher({ lang }) {
  const otherLang = lang === 'en' ? 'es' : 'en';
  const [hash, setHash] = useState('');
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);
  return (
    <a href={`/${otherLang}/${hash}`} hrefLang={otherLang} lang={otherLang} className={`px-3 py-2 text-xs font-medium rounded-lg border border-gray-200 dark:border-night-line text-gray-600 dark:text-night-body hover:text-gray-900 dark:hover:text-night-heading hover:bg-gray-100 dark:hover:bg-night-raised transition-colors ${focusStyle}`}>
      {languages[otherLang]}
    </a>
  );
}

export default function Navbar({ lang = 'en' }) {
  const t = useTranslations(lang);
  const menuOpen = useStore(isMovilMenuOpen);
  const links = [
    ['#top', t.nav.home],
    ['#experience', t.nav.experience],
    ['#certifications', t.nav.certifications],
    ['#featured-projects', t.nav.projects],
    ['#skills', t.nav.skills],
    ['#education', t.nav.education],
    ['#about-me', t.nav.aboutMe],
  ];
  return (
    <nav aria-label={t.menu.title} className="z-30 bg-white/90 dark:bg-night-canvas/90 backdrop-blur-sm border-b border-gray-200 dark:border-night-line fixed top-0 w-full transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 py-3">
        <a href="#top" aria-label={t.nav.home} className={`flex shrink-0 items-center gap-2.5 rounded-lg ${focusStyle}`}>
          <img src="/img/pp-official-circular.png" alt="" width="32" height="32" className="w-8 h-8 rounded-full object-cover" />
          <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-night-heading">Victor López</span>
        </a>
        <div className="hidden xl:flex items-center gap-0.5">
          {links.map(([href, label]) => (
            <a key={href} href={href} className={`px-2.5 py-2 text-sm font-medium text-gray-600 dark:text-night-body hover:text-gray-900 dark:hover:text-night-heading rounded-lg hover:bg-gray-100 dark:hover:bg-night-raised transition-colors ${focusStyle}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitcher lang={lang} />
          <ThemeToggle label={t.nav.toggleTheme} />
          <button type="button" id="mobile-menu-trigger" onClick={() => isMovilMenuOpen.set(true)} aria-label={t.nav.openMenu} aria-expanded={menuOpen} aria-controls="mobile-navigation" className={`xl:hidden p-2.5 rounded-lg text-gray-600 dark:text-night-body hover:bg-gray-100 dark:hover:bg-night-raised transition-colors ${focusStyle}`}>
            <span aria-hidden="true" className="block w-5 h-5"><Menu /></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
