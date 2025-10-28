import React from 'react'
import { LuSend } from "react-icons/lu";
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (



<div id="contact" className="six-section">
  <Container>
    <div className="contact">
  <h1>get in touch</h1>
  <p>Ready to turn your ideas into reality? Let's collaborate.</p>
  <form>
    <div className="feild">
      <label>full name</label>
      <input type="text" placeholder="your full name"/>
    </div>
    <div className="feild">
      <label>Email Address</label>
      <input type="email" placeholder="your@email.com"/>
    </div>
    <div className="feild">
      <label>Your Message</label>
      <textarea  placeholder="share your thoughts"/>
    </div>
    <button><LuSend/> send message</button>
</form>
    </div>
  </Container>
    </div>
  )
}

export default Contact