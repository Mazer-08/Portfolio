import React, { useState } from 'react';
import './navbar.css';
import { BiMenu, BiMessageSquareX } from "react-icons/bi";
const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false);
  const [isactive, setIsactive] = useState(false);  

  const changeBg=()=>{
    if(window.scrollY>=20)
        setIsactive(true);
    else
        setIsactive(false);
}
window.addEventListener('scroll', changeBg);

  const Menu=()=>{
    
    return(
      <div className='links'>
      <a href="#project">Project</a>
      <a href="#codingProfiles">Ranks</a>
      <a href="#about">About</a>
      <a href="https://www.linkedin.com/in/sabhya-kumar-singh-b837a1121/">LinkedIn</a>
      <a href="https://drive.google.com/drive/u/0/folders/1-3hUQQgm3Z56v8PGpcLZMinlRpU_0jxg">Resume</a>
      </div>
    )
  }

  return (
    <div className='navbar-wrapper'>

      <div className='navbar-brand'>
      <a href="/">SABHYA KUMAR SINGH</a>
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