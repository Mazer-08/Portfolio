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
          <p>SDE | Alumni: B.Tech ECE, IIIT Surat (Class of 2025)</p>

          <p>My tech stack includes Python, AWS, Azure, Databricks, JavaScript, React, Node.js, Express.js, MongoDB, JWT. I’m currently diving deeper into working and architecture of LLMs.</p>

          <p>As an ex-Core Member @ GDSC IIITS'23, I thrive in collaborative environments and also enjoy solving DSA problems.</p>

          <p>Let’s connect to discuss scalable architectures, LLMs, backend development, AWS, DSA, or even “The Office”!</p>
        </div>
      </div>
    </div>
  )
}

export default About