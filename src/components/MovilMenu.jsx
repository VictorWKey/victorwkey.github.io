import React from 'react'
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';
import Close from "../icons/Close.jsx"

function MovilMenu() {
  const $isMovilMenuOpen = useStore(isMovilMenuOpen);

  const handleNavigation = (href) => {
    isMovilMenuOpen.set(false);
    setTimeout(() => {
      window.location.hash = href;
    }, 100);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 sm:hidden transition-opacity duration-200 ${
          $isMovilMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => isMovilMenuOpen.set(false)}
      />
      
      {/* Menu */}
      <div className={`z-50 w-72 h-screen bg-white dark:bg-gray-950 fixed flex flex-col border-r border-gray-200 dark:border-gray-700 transition-transform duration-200 sm:hidden transform ${$isMovilMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
          <button 
            onClick={() => isMovilMenuOpen.set(false)} 
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className='w-5 h-5'>
              <Close/>
            </div>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-2">
          <button onClick={() => handleNavigation('#top')}
            className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Home
          </button>
          <button onClick={() => handleNavigation('#projects')}
            className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Experience
          </button>
          <button onClick={() => handleNavigation('#skills')}
            className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Skills
          </button>
          <button onClick={() => handleNavigation('#about-me')}
            className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            About Me
          </button>
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Victor López</p>
        </div>
      </div>
    </>
  )
}

export default MovilMenu