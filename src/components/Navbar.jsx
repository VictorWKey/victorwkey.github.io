import Menu from '../icons/Menu.jsx';
import { isMovilMenuOpen } from '../movilMenu.js';

function Navbar() {
  return (
    <nav className="z-20 bg-gradient-to-r from-primary via-primary to-primary/95 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10 flex justify-between sm:justify-center items-center py-4 px-6 fixed top-0 w-full">
      
      {/* Logo/Brand - Mobile */}
      <div className="sm:hidden flex items-center">
        <h2 className="text-white font-bold text-lg">VL</h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-8">
        <a 
          href="#top" 
          className="group relative font-semibold text-white cursor-pointer transition-all duration-200 hover:text-white/90 py-2 px-4 rounded-full hover:bg-white/10"
        >
          Home
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
        </a>
        
        <a 
          href="#projects" 
          className="group relative font-semibold text-white cursor-pointer transition-all duration-200 hover:text-white/90 py-2 px-4 rounded-full hover:bg-white/10"
        >
          Projects
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
        </a>
        
        <a 
          href="#skills" 
          className="group relative font-semibold text-white cursor-pointer transition-all duration-200 hover:text-white/90 py-2 px-4 rounded-full hover:bg-white/10"
        >
          Skills
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
        </a>
        
        <a 
          href="#about-me" 
          className="group relative font-semibold text-white cursor-pointer transition-all duration-200 hover:text-white/90 py-2 px-4 rounded-full hover:bg-white/10"
        >
          About Me
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => isMovilMenuOpen.set(true)}
        className="sm:hidden p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 group"
      >
        <div className='size-6 text-white group-hover:scale-110 transition-transform duration-200'>
          <Menu/>
        </div>
      </button>
    </nav>
  )
}


export default Navbar