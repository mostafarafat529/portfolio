import React from 'react'
import image1 from "../images/WhatsApp_Image_2025-04-26_at_1.39.02_AM-removebg-preview.png"
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion';
const About = () => {
  return (

<div id='about' className='second-section'>
  <Container>
    <motion.div className='about' initial={{opacity:0 , y:50}}
    whileInView={{opacity:1 , y:0}} transition={{duration:1 , delay:.5}}
    viewport={{once:true}}
      >
      <div className='about-img'>
        <img src={image1} alt='profile'/>
      </div>
      <div className='info-about'>
      <h2>About <span>Me</span></h2>
  <h3>Frontend Developer</h3>
<p>I am a passionate Frontend Developer with a strong focus on creating beautiful, responsive,and user-friendly
websites.I love turning ideas into reality using modern web technologies. My main goal is to deliver
  pixel-perfect designs, optimized performance, and smooth user experiences.</p>
  <a href="#services" className="btn">View More</a>

      </div>
    </motion.div>
  </Container>

</div>


  )
}

export default About