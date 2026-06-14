import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Navbar = () => {

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <div className='first-section'>
        <Container>
          <div className='header'>
            <h1>mostafa<span style={{color:'#a78bfa'}}>.dev</span></h1>
            <nav>
              <a href="#home" className='active'>Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </nav>
            <button>
              <a href="/PDF/CV_MostafaRafat.pdf" target="_blank" download="CV MOSTAFA RAFAT">
                Download CV
              </a>
            </button>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar
