import React from 'react'
import "./HomePage.css"

import image1 from "../images/WhatsApp_Image_2025-04-26_at_1.39.02_AM-removebg-preview.png"
import { Container } from 'react-bootstrap'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'
import { MdWavingHand } from "react-icons/md";




const Home = () => {
  return (

<section id='home'>
    <Container>
    <div className='home'>
<div className='info'  >
<h2><span>Hi</span>, My name is Mostafa Rafat <span className='hand'><MdWavingHand/></span></h2>   
<h3>
      I'm a{' '}
      <span className="typing-text">
        <Typewriter words={['Frontend Developer', 'React Developer','Problem Solver']}
          loop={0}cursor  cursorStyle="|"  typeSpeed={80}  deleteSpeed={40}  delaySpeed={1500}/>
      </span>
    </h3>
<p>I build interactive and responsive websites using React and modern web tools.</p>
<nav>
<a href="https://www.linkedin.com/in/mostafa-rafat-20108429b/" target="_blank" rel="noreferrer">
    <BsLinkedin />
    <span className='sign'>linkedin</span>
  </a>
  <a href="https://www.facebook.com/mostafa.rafat" target="_blank" rel="noreferrer">
    <FaFacebook />
    <span className='sign'>facebook</span>
  </a>
  <a href="https://github.com/mostafarafat529?tab=repositories" target="_blank" rel="noreferrer">
    <FaGithub />
    <span className='sign'>github</span>
  </a>
  <a href="https://wa.me/201027807676
" target="_blank" rel="noreferrer">
    <IoLogoWhatsapp />
    <span className='sign'>WhatsApp</span>
  </a>
</nav>
<div className='btns'>
<button>download cv</button>
<button id='contact'>contact me</button>
</div>
</div>
<div className="home-img">
  <img src={image1} alt="profile" />
</div>

    </div>
    </Container>
    {/* <div className="arrow"><FaArrowDown/></div> */}

</section>

  )
}

export default Home