import { useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';
import Close from '../icons/Close.jsx';
import { useTranslations } from '../i18n/index.js';

export default function MovilMenu({ lang = 'en' }) {
  const open = useStore(isMovilMenuOpen);
  const dialogRef = useRef(null);
  const t = useTranslations(lang);
  const links = [
    ['#top', t.nav.home],
    ['#experience', t.nav.experience],
    ['#certifications', t.nav.certifications],
    ['#featured-projects', t.nav.projects],
    ['#skills', t.nav.skills],
    ['#education', t.nav.education],
    ['#about-me', t.nav.aboutMe],
  ];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      if (!dialog.open) dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
        if (dialog.open) dialog.close();
      };
    }
    if (dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    const closeOnDesktop = () => {
      if (desktop.matches) isMovilMenuOpen.set(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    closeOnDesktop();
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const closeMenu = () => {
    dialogRef.current?.close();
    isMovilMenuOpen.set(false);
  };
  const handleBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeMenu();
  };

  return (
    <dialog ref={dialogRef} id="mobile-navigation" aria-labelledby="mobile-menu-title" onCancel={() => isMovilMenuOpen.set(false)} onClose={() => isMovilMenuOpen.set(false)} onClick={handleBackdrop} className="fixed inset-y-0 left-0 right-auto m-0 h-dvh max-h-none w-80 max-w-[calc(100%_-_2rem)] p-0 border-0 border-r border-gray-200 dark:border-night-line bg-white dark:bg-night-canvas text-gray-900 dark:text-night-heading backdrop:bg-black/40 backdrop:backdrop-blur-sm xl:hidden">
      <div className="flex min-h-full flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-night-line">
          <span id="mobile-menu-title" className="text-lg font-semibold">{t.menu.title}</span>
          <button type="button" autoFocus onClick={closeMenu} aria-label={t.nav.closeMenu} className="p-2.5 rounded-lg text-gray-600 dark:text-night-body hover:bg-gray-100 dark:hover:bg-night-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent">
            <span aria-hidden="true" className="block w-5 h-5"><Close /></span>
          </button>
        </div>
        <nav aria-label={t.menu.title} className="flex-1 py-3 px-3 space-y-1">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={closeMenu} className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 dark:text-night-body hover:bg-gray-100 dark:hover:bg-night-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent">
              {label}
            </a>
          ))}
        </nav>
        <div className="p-5 border-t border-gray-200 dark:border-night-line">
          <p className="text-xs text-gray-500 dark:text-night-muted">© {new Date().getFullYear()} Victor López</p>
        </div>
      </div>
    </dialog>
  );
}
