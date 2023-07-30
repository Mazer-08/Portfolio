import React from 'react'
import './footer.css'
import {BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
	const aliceblue = '#f0f8ff';
  return (
    <div className='footer-wrapper'>
      	<div className="footer">
			    <div className="social">
            <a className='icons' href="https://www.instagram.com/sabhya_08_/?hl=en"><BsInstagram size={28} color={aliceblue}/></a>
            <a className='icons' href="https://twitter.com/kumar_sabhya?lang=en"><BsTwitter size={28} color={aliceblue}/></a>
            <a className='icons' href="https://www.linkedin.com/in/sabhya-kumar-singh-b837a1121/"><BsLinkedin size={28} color={aliceblue} /></a>
			    </div>
		  	  <div className="contact-me">
            <h1>Or Mail?</h1>
            <div className="email">
                <p>sabhya.1624@gmail.com</p>
            </div>
          </div>
          <div className="closing">
            <p>Sabhya Kumar Singh™️ 2023</p>
          </div>
        </div>
    </div>
  )
}

export default Footer