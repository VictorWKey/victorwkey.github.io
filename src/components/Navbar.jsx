import React, { useState } from 'react'
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';


function Navbar() {


  return (
    <nav className="z-20 bg-white flex justify-left sm:justify-center items-center gap-12 py-2 px-4 border-4 border-b-primary fixed top-0 w-full">
      <a href="#top" className="hidden sm:font-semibold sm:text-gray-800 sm:flex sm:cursor-pointer hover:text-primary ">Inicio</a>
      <a href="#projects" className="hidden sm:font-semibold sm:text-gray-800 sm:flex sm:cursor-pointer hover:text-primary">Proyectos</a>
      <a href="#skills" className="hidden sm:font-semibold sm:text-gray-800 sm:flex sm:cursor-pointer hover:text-primary">Habilidades</a>

      <a href="#about-me"className="hidden sm:font-semibold sm:text-gray-800 sm:flex sm:cursor-pointer hover:text-primary ">Sobre mi</a>
      <div onClick={() => isMovilMenuOpen.set(true)}>
        <img className="flex sm:hidden" src="../../utility-icons/menu_icon.svg"/>
      </div>
    </nav>
  )
}

export default Navbar