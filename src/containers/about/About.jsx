import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about-wrapper' id='about'>
        <h1>About Me</h1>
        <div className="about">
            <div className="saby">
              <img src="./images/saby-1.png" alt="" />
            </div>
            <div className="short">
                {/* <h1>The Short</h1> */}
                <br></br>
                <p>I am a passionate and dedicated frontend developer, studying at Indian Institute of Information Technology Surat.</p>
                <p>Transforming innovative designs into functional and intuitive websites and practicing DSA and Competitive Programming is what I love.</p>
                <p>I thoroughly enjoy working in teams, exchanging ideas, and collectively bringing visions to life.</p>
                <p>Thank you, I look forward to connecting with you to discuss potential collaborations and exciting opportunities.</p>
            </div>
            {/* <div className="long">
                <h1>The Long</h1>
                <p>Welcome to my portfolio! I am a passionate and dedicated frontend developer and web designer currently studying at Indian Institute of Information Technology Surat. With a strong foundation in web development and a specialization in React.js, I strive to create captivating and user-friendly digital experiences.</p>
                <p>I transform innovative designs into functional and intuitive websites and interactive user interfaces that seamlessly adapt to various devices and screen sizes.</p>
                <p>Driven by a genuine enthusiasm for problem-solving, I also practice DSA and Competitive Programming.</p>
                <p>I thoroughly enjoy working in teams, exchanging ideas, and collectively bringing visions to life.</p>
                <p>Thank you, I look forward to connecting with you to discuss potential collaborations and exciting opportunities.</p>
            </div> */}
        </div>
    </div>
  )
}

export default About