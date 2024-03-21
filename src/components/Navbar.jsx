import React, { useState } from 'react'
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';


function Navbar() {


  return (
    <nav className="z-20 bg-primary  flex justify-left sm:justify-center items-center gap-12 py-3 px-4 fixed top-0 w-full ">
      <a href="#top" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Inicio</a>
      <a href="#projects" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Proyectos</a>
      <a href="#skills" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Habilidades</a>

      <a href="#about-me"className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Sobre mi</a>
      <div onClick={() => isMovilMenuOpen.set(true)}>
        <img className="flex sm:hidden size-8" src="../../public/icons/Menu.svg"/>
      </div>
    </nav>
  )
}

export default Navbar