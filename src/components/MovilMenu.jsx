import React from 'react'
import { useStore } from '@nanostores/react';
import { isMovilMenuOpen } from '../movilMenu.js';
import Close from "../icons/Close.jsx"

function MovilMenu() {
  const $isMovilMenuOpen = useStore(isMovilMenuOpen);

  return (
    <div className={`z-50 w-80 h-screen bg-white fixed flex flex-col p-3 items-start border-r-2 border-black transition-transform duration-300 sm:hidden transform ${$isMovilMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div onClick={() => isMovilMenuOpen.set(false)} className='self-end mb-14'>
        <div class='size-12'>
          <Close/>
        </div>
      </div>
      <div className='border-b-2 pl-3 border-black w-full mb-14'>
        <a className='text-2xl  ' onClick={() => isMovilMenuOpen.set(false)} href="#top">Inicio</a>
      </div>
      <div className='border-b-2 pl-3 border-black w-full mb-14'>
        <a className='text-2xl  ' onClick={() => isMovilMenuOpen.set(false)} href="#projects">Proyectos</a>
      </div>
      <div className='border-b-2 pl-3 border-black w-full mb-14'>
        <a className='text-2xl  ' onClick={() => isMovilMenuOpen.set(false)} href="#skills">Habilidades</a>
      </div>
      <div className='border-b-2 pl-3 border-black w-full mb-14'>
        <a className='text-2xl  ' onClick={() => isMovilMenuOpen.set(false)} href="#about-me">Sobre mi</a>
      </div>
    </div>
  )
}

export default MovilMenu