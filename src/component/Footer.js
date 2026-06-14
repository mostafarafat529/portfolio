import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Left — copyright */}
      <h3>© 2025 <span>Mostafa Rafat</span>. All rights reserved.</h3>

      {/* Center — social icons */}
      <nav>
        <a href="https://www.linkedin.com/in/mostafa-rafat-20108429b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/mostafa.rafat" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="https://github.com/mostafarafat529?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://wa.me/201027807676" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <IoLogoWhatsapp />
        </a>
      </nav>

      {/* Right — links */}
      <div className="footer-links">
        <span>Terms & Conditions</span>
        <span className="footer-sep">|</span>
        <span>Privacy Policy</span>
      </div>

    </footer>
  )
}

export default Footer