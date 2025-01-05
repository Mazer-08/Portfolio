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
                <p>Aspiring Data Engineer | MERN Stack Developer | Final Year ECE Undergrad @ IIIT Surat '25</p>
                
                <p>My tech stack includes JavaScript, React, Framer Motion, Node.js, Express.js, MongoDB, JWT, and AWS. I’m currently diving deeper into AWS services like EC2, IAM, and EBS to enhance my skill set further.</p>

                <p>As an ex-Core Member @ GDSC IIITS'23, I thrive in collaborative environments and also love solving DSA problems.</p>

                <p>Let’s connect to discuss JavaScript, React, backend development, AWS, DSA, or even “The Office”!</p>
            </div>
        </div>
    </div>
  )
}

export default About