import Menu from '../icons/Menu.jsx';
import { isMovilMenuOpen } from '../movilMenu.js';


function Navbar() {

  return (
    <nav className="z-20 bg-primary  flex justify-left sm:justify-center items-center gap-12 py-3 px-4 fixed top-0 w-full ">
      <a href="#top" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Home</a>
      <a href="#projects" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Projects</a>
      <a href="#skills" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">Skills</a>

      <a href="#about-me" className="hidden sm:font-semibold sm:text-white sm:flex sm:cursor-pointer hover:text-gray-100">About Me</a>
      <div onClick={() => isMovilMenuOpen.set(true)}>
        <div className='size-8 sm:hidden'>
          <Menu/>
        </div>
      </div>
    </nav>
  )
}


export default Navbar