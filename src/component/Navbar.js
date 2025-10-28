import React from 'react'
import { Container } from 'react-bootstrap'

const Navbar = () => {
  return (
        <div className='first-section'>
<Container>
        <div className='header'>
        <h1>portfolio</h1>
        <nav>
<a href="#home" className='active'>Home</a>
<a href="#about">About</a>
<a href="#services">Services</a>
<a href="#skills">Skills</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>
</nav>
<button> <a href="/PDF/ATS CV ME.pdf"target="_blank" download="CV MOSTAFA RAFAT">Download CV</a></button>

        </div>
</Container>
        </div>
  )
}

export default Navbar