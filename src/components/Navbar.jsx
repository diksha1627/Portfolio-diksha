import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 backdrop-blur-md bg-primary/80 border-b border-white/10 shadow-lg`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <Link
          to='/'
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-0.5 transition-transform group-hover:scale-110">
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
              <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-white text-[20px] font-bold tracking-tight">
              Diksha
              <span className="text-green-400 font-normal ml-1">| Portfolio</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex items-center gap-8'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a 
                href={`#${nav.id}`}
                className={`relative text-[16px] font-medium transition-colors duration-300 
                  ${active === nav.title ? "text-white" : "text-secondary"}
                  hover:text-white group`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300
                  ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <img
              src={!toggle ? menu : close}
              alt="menu"
              className="w-6 h-6 object-contain"
            />
          </button>

          {/* Mobile Menu Dropdown */}
          <div className={`${!toggle ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}
            transition-all duration-300 ease-out
            absolute top-[calc(100%+0.5rem)] right-4 
            min-w-[200px] p-4
            bg-gradient-to-br from-gray-900 to-gray-800 
            backdrop-blur-lg
            border border-white/10
            rounded-2xl shadow-2xl`}>
            
            <ul className='list-none flex flex-col gap-3'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className="transform transition-all duration-300"
                  style={{
                    transitionDelay: toggle ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <a 
                    href={`#${nav.id}`}
                    className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200
                      ${active === nav.title 
                        ? "text-white bg-gradient-to-r from-green-400/20 to-blue-500/20 border-l-2 border-green-400" 
                        : "text-secondary hover:text-white hover:bg-white/5"}
                    `}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;