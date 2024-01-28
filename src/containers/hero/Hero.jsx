import React from 'react'
import './hero.css'
import Card from '../../components/card/Card'
// import CC from './images/cc.png'
const Hero = () => {
    return (
        <div className="hero-wrapper" id='codingProfiles'>
			<h1>Coding Profiles</h1>
			<div className='cp-card-wrapper'>
				<Card platform="Code Chef" rating="Max Contest Rating: 1586" profileLink="https://www.codechef.com/users/mazer_08"/>
				<Card platform="Code Forces" rating="Max Contest Rating: 1126" profileLink="https://codeforces.com/profile/M4Z3R"/> 
				{/* <Card platform="GFG" rating="Coding Score: 306" profileLink="https://auth.geeksforgeeks.org/user/sabhya1624/practice/"/>  */}
				<Card platform="Leet Code" rating="Max Contest Rating: 1528" profileLink="https://leetcode.com/mazer_08/"/> 
			</div>

        </div>  
    )
}

export default Hero