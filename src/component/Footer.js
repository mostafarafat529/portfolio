import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (

<div className="footer">
<div className="footer-links">
  <span>Terms & Conditions</span>|
  <span>Privacy Policy</span>
</div>
<nav>
<a href="https://www.linkedin.com/in/mostafa-rafat-20108429b" target="_blank" rel="noreferrer">
    <BsLinkedin />
  </a>
  <a href="https://www.facebook.com/mostafa.rafat" target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>
  <a href="https://github.com/mostafarafat529?tab=repositories" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
  <a href="https://wa.me/201027807676
" target="_blank" rel="noreferrer">
    <IoLogoWhatsapp />
  </a>
</nav>
<h3>© 2025 <span>Mostafa Rafat</span>. All rights reserved.</h3>
</div>


  )
}

export default Footer