import React from 'react'
import image1 from "../images/WhatsApp_Image_2025-04-26_at_1.39.02_AM-removebg-preview.png"
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion';

const About = () => {
  return (

    <div id='about' className='second-section'>
      <Container>
        <motion.div className='about' initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .5 }}
          viewport={{ once: true }}
        >
          <div className='about-img'>
            <img src={image1} alt='profile' />
          </div>
          <div className='info-about'>
            <h2>About <span>Me</span></h2>
            <h3>MERN Stack Developer</h3>
            <p>I am a passionate MERN Stack Developer with hands-on experience in building modern web applications using React.js, Node.js, Express.js, and MongoDB. I enjoy transforming ideas into scalable digital solutions while focusing on clean code, performance, responsive design, and great user experiences.</p>

            <div className="about-stats">
              <div className="stat-card">
                <h4>10+</h4>
                <span>Projects</span>
              </div>
              <div className="stat-card">
                <h4>15+</h4>
                <span>Technologies</span>
              </div>
              <div className="stat-card">
                <h4>2+</h4>
                <span>Courses</span>
              </div>
            </div>

            <a href="#services" className="btn">Explore My Journey</a>
          </div>
        </motion.div>
      </Container>
    </div>

  )
}

export default About
