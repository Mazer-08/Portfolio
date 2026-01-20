import React, { useState, useEffect } from 'react';
import './navbar.css';
import { BiMenu, BiMessageSquareX, BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isactive, setIsactive] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const changeBg = () => {
    if (window.scrollY >= 20)
      setIsactive(true);
    else
      setIsactive(false);
  }
  window.addEventListener('scroll', changeBg);

  // Dynamic color for visibility on both transparent and dark backgrounds
  const iconColor = isactive ? "#fff" : "var(--color-text)";

  const Menu = () => {
    return (
      <div className='links'>
        {/* Helper function or manual style application to ensure links override CSS color */}
        <a href="#project" style={{ color: iconColor }}>Project</a>
        <a href="#codingProfiles" style={{ color: iconColor }}>Ranks</a>
        <a href="#about" style={{ color: iconColor }}>About</a>
        <a href="https://www.linkedin.com/in/sabhya-kumar-singh-b837a1121/" style={{ color: iconColor }}>LinkedIn</a>
        <a href="https://drive.google.com/drive/u/0/folders/1-3hUQQgm3Z56v8PGpcLZMinlRpU_0jxg" style={{ color: iconColor }}>Resume</a>
      </div>
    )
  }

  return (
    <div className='navbar-wrapper' style={{ background: isactive ? "var(--color-footer)" : "transparent", color: iconColor }}>

      <div className='navbar-brand'>
        <a href="/" style={{ color: iconColor }}>SABHYA KUMAR SINGH</a>
      </div>

      <div className="navbar-menu">
        <Menu />
        <button onClick={toggleTheme} className="ml-4 p-2 rounded-full hover:bg-gray-200/20 transition-colors" aria-label="Toggle Theme">
          {theme === 'light' ? <BiMoon size={24} color={iconColor} /> : <BiSun size={24} color={iconColor} />}
        </button>
      </div>

      <div className="navbar-menu-mobile">
        <button onClick={toggleTheme} className="mr-4 p-2 rounded-full hover:bg-gray-200/20 transition-colors" aria-label="Toggle Theme">
          {theme === 'light' ? <BiMoon size={24} color={iconColor} /> : <BiSun size={24} color={iconColor} />}
        </button>
        {(toggleMenu)
          ? <BiMessageSquareX size={30} onClick={() => setToggleMenu(false)} color={iconColor} />
          : <BiMenu size={30} onClick={() => setToggleMenu(true)} color={iconColor} />
        }
        {toggleMenu && (
          <div className="navbar-menu-mobile-container scale-up-center">
            <Menu />
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar