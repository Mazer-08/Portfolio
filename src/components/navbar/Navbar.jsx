import React, { useState } from 'react';
import './navbar.css';
import { BiMenu, BiMessageSquareX } from "react-icons/bi";
const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);

  const Menu=()=>{
    return(
      <div className='links'>
      <a href="/">About</a>
      <a href="/">LinkedIn</a>
      <a href="/">Get In Touch</a>
      </div>
    )
  }

  return (
    <div className='navbar-wrapper'>

      <div className='navbar-brand'>
        SABHYA KUMAR SINGH
      </div>

      <div className="navbar-menu">
          <Menu/>
      </div>

      <div className="navbar-menu-mobile">
        {(toggleMenu)
          ?<BiMessageSquareX size={30} onClick={()=>setToggleMenu(false)}/>
          :<BiMenu size={30} onClick={()=>setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="navbar-menu-mobile-container scale-up-center">
            <Menu/>
          </div>
        )
        }
        {/* {!toggleMenu && (
          <div className="navbar-menu-mobile-container scale-up-center">
            <Menu/>
          </div>
        )
        } */}
      </div>
    </div>
  )
}

export default Navbar