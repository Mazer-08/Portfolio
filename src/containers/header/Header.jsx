import React from 'react'
import './header.css'
import 'animate.css'

// import { Button } from "@material-tailwind/react";

const Header = () => {
	return (
		<div className='header-wrapper'>
			<h1 className="animate__animated animate__zoomInDown">Greetings Visitor🙋🏻, I'm Sabhya</h1>
			<h1 className="animate__animated animate__zoomIn animate__delay-1s">Frontend Developer &</h1>
			<h1 className="animate__animated animate__zoomIn animate__delay-2s">A Pre-Final Year Undergraduate at IIIT Surat</h1>
		</div>
	)
}

export default Header