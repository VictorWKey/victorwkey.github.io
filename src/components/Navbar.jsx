import Menu from '../icons/Menu.jsx';
import { isMovilMenuOpen } from '../movilMenu.js';
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {dark ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function Navbar() {
  return (
    <nav className="z-20 bg-white/80 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex justify-between sm:justify-between items-center py-3 px-6 fixed top-0 w-full transition-colors duration-200">
      
      {/* Logo/Brand */}
      <div className="flex items-center">
        <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">VL</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-1">
        <a href="#top" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          Home
        </a>
        <a href="#projects" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          Experience
        </a>
        <a href="#skills" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          Skills
        </a>
        <a href="#about-me" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
          About Me
        </a>
        <div className="ml-2 border-l border-gray-200 dark:border-gray-700 pl-2">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile: theme toggle + menu */}
      <div className="sm:hidden flex items-center gap-2">
        <ThemeToggle />
        <button 
          onClick={() => isMovilMenuOpen.set(true)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <div className='w-5 h-5'>
            <Menu/>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar