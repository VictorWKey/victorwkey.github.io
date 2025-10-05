import React from 'react'
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';
import Close from "../icons/Close.jsx"

function MovilMenu() {
  const $isMovilMenuOpen = useStore(isMovilMenuOpen);

  const handleNavigation = (href) => {
    // Cerrar el menú primero
    isMovilMenuOpen.set(false);
    // Luego navegar a la sección con un pequeño delay
    setTimeout(() => {
      window.location.hash = href;
    }, 100);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 sm:hidden transition-opacity duration-300 ${
          $isMovilMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => isMovilMenuOpen.set(false)}
      />
      
      {/* Menu */}
      <div className={`z-50 w-72 h-screen bg-white fixed flex flex-col shadow-2xl transition-transform duration-300 sm:hidden transform ${$isMovilMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          
          <button 
            onClick={() => isMovilMenuOpen.set(false)} 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className='size-5 text-gray-600'>
              <Close/>
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-4">
          <button
            onClick={() => handleNavigation('#top')}
            className="w-full text-left block px-6 py-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
          >
            <span className="text-base font-medium">Home</span>
          </button>
          
          <button
            onClick={() => handleNavigation('#projects')}
            className="w-full text-left block px-6 py-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
          >
            <span className="text-base font-medium">Experience</span>
          </button>
          
          <button
            onClick={() => handleNavigation('#skills')}
            className="w-full text-left block px-6 py-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
          >
            <span className="text-base font-medium">Skills</span>
          </button>
          
          <button
            onClick={() => handleNavigation('#about-me')}
            className="w-full text-left block px-6 py-4 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-4 border-transparent hover:border-primary"
          >
            <span className="text-base font-medium">About Me</span>
          </button>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">© 2025 Victor López</p>
        </div>
      </div>
    </>
  )
}

export default MovilMenu