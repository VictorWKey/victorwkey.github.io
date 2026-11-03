import { useState, useEffect, useRef } from 'react';
import { useTranslations } from '../i18n/index.js';

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12" />
    </svg>
  );
}

function Choice({ name, value, checked, onChange, children }) {
  return (
    <label className="relative cursor-pointer">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="block px-3 py-2.5 text-sm font-medium text-center rounded-lg border border-gray-200 dark:border-night-line text-gray-600 dark:text-night-body hover:bg-gray-50 dark:hover:bg-night-raised peer-checked:border-primary peer-checked:bg-primary-50 peer-checked:text-primary-700 dark:peer-checked:bg-night-raised dark:peer-checked:text-night-heading dark:peer-checked:border-night-accent peer-checked:ring-1 peer-checked:ring-primary dark:peer-checked:ring-night-accent peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary dark:peer-focus-visible:outline-night-accent transition-colors">
        {children}
      </span>
    </label>
  );
}

export default function CVDownloadModal({ lang = 'en' }) {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang);
  const [format, setFormat] = useState('pdf');
  const dialogRef = useRef(null);
  const t = useTranslations(lang);
  const fileName = `CV_Victor_Lopez_${selectedLang === 'en' ? 'EN' : 'ES'}.${format}`;
  const formatLabel = format === 'pdf' ? 'PDF' : 'Word';

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

  const closeDialog = () => {
    dialogRef.current?.close();
    setOpen(false);
  };
  const handleBackdrop = (event) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog();
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-controls="cv-download-dialog" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-night-accent dark:text-night-on-accent dark:hover:bg-night-accent-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-canvas">
        <DownloadIcon />
        {t.header.downloadCV}
      </button>

      <dialog ref={dialogRef} id="cv-download-dialog" aria-labelledby="cv-download-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={handleBackdrop} className="m-auto w-[calc(100%_-_2rem)] max-w-sm max-h-[calc(100dvh_-_2rem)] overflow-y-auto p-6 rounded-2xl border border-gray-200 dark:border-night-line bg-white dark:bg-night-surface text-gray-900 dark:text-night-heading shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm text-left">
        <div className="flex items-center justify-between gap-3 mb-5">
          <h2 id="cv-download-title" className="text-lg font-semibold">{t.header.cvModalTitle}</h2>
          <button type="button" autoFocus onClick={closeDialog} aria-label={t.header.cvClose} className="p-2 rounded-lg text-gray-500 dark:text-night-muted hover:text-gray-700 dark:hover:text-night-heading hover:bg-gray-100 dark:hover:bg-night-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <fieldset className="mb-5">
          <legend className="mb-2 text-sm font-medium text-gray-700 dark:text-night-body">{t.header.cvLanguage}</legend>
          <div className="grid grid-cols-2 gap-2">
            <Choice name="cv-language" value="en" checked={selectedLang === 'en'} onChange={() => setSelectedLang('en')}>{t.header.cvEnglish}</Choice>
            <Choice name="cv-language" value="es" checked={selectedLang === 'es'} onChange={() => setSelectedLang('es')}>{t.header.cvSpanish}</Choice>
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="mb-2 text-sm font-medium text-gray-700 dark:text-night-body">{t.header.cvFormat}</legend>
          <div className="grid grid-cols-2 gap-2">
            <Choice name="cv-format" value="pdf" checked={format === 'pdf'} onChange={() => setFormat('pdf')}>PDF</Choice>
            <Choice name="cv-format" value="docx" checked={format === 'docx'} onChange={() => setFormat('docx')}>Word</Choice>
          </div>
        </fieldset>

        <a href={`/${fileName}`} download={fileName} onClick={closeDialog} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-night-accent dark:text-night-on-accent dark:hover:bg-night-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-night-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-night-surface">
          <DownloadIcon />
          {t.header.cvDownload} {formatLabel}
        </a>
      </dialog>
    </>
  );
}
