import React from 'react'
import './hero.css'
import Card from '../../components/card/Card'
// import CC from './images/cc.png'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 0"] // Start tracking when top of element hits bottom of viewport, end when bottom hits top
	});

	// Scale: 0.8 at entry, 1 at center, 0.8 at exit
	const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
	const opacityProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);


	return (
		<div className="hero-wrapper" id="codingProfiles">
			<h1>Coding Profiles</h1>
			<motion.div
				ref={ref}
				style={{
					scale: scaleProgress,
					opacity: opacityProgress
				}}
				className='cp-card-wrapper'
			>
				<Card platform="Code Chef" rating="Max Contest Rating: 1613" profileLink="https://www.codechef.com/users/mazer_08" />
				<Card platform="Code Forces" rating="Max Contest Rating: 1126" profileLink="https://codeforces.com/profile/M4Z3R" />
				{/* <Card platform="GFG" rating="Coding Score: 306" profileLink="https://auth.geeksforgeeks.org/user/sabhya1624/practice/"/>  */}
				<Card platform="Leet Code" rating="Max Contest Rating: 1642" profileLink="https://leetcode.com/mazer_08/" />
			</motion.div>

		</div>
	)
}

export default Hero