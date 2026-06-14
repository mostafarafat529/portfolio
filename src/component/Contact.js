import React from 'react'
import { LuSend } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <div id="contact" className="six-section">
      <Container>

        <h2 className="contact-title">Get In <span>Touch</span></h2>
        <p className="contact-sub">Ready to turn your ideas into reality? Let's collaborate.</p>

        <div className="contact-wrap">

          {/* Left — info */}
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>I'm open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back to you quickly.</p>

            <div className="contact-links">
              <a href="https://wa.me/201027807676" target="_blank" rel="noreferrer">
                <IoLogoWhatsapp /> WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/mostafa-rafat-20108429b/" target="_blank" rel="noreferrer">
                <BsLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/mostafarafat529" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form className="contact-form">
            <div className="feild">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="feild">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="feild">
              <label>Your Message</label>
              <textarea placeholder="Tell me about your project..." />
            </div>
            <button type="submit"><LuSend /> Send Message</button>
          </form>

        </div>
      </Container>
    </div>
  )
}

export default Contact