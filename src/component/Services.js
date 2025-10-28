import React from 'react'
import { FaReact, FaCode, FaFileCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap'
const Services = () => {


  const services = [
    
    {
      id :1 ,
      icon: <FaReact />,
      title: "Frontend Development",
      description: "I build responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript.",
    },
    {
      id :2 ,
      icon: <FaFileCode />,
      title: "Convert UI Designs to Code",
      description: "I convert Figma or Adobe XD designs into clean, pixel-perfect, and functional web pages using modern frontend tools.",
    },
    {
      id :3 ,
      icon: <FaCode />,
      title: "Landing Page Development",
      description: "I create fast, responsive, and SEO-friendly landing pages to promote products, apps, or businesses.",
    },
    {
      id :4 ,
      icon: <FaLaptopCode />,
      title: "Personal Portfolio Websites",
      description: "I build modern portfolio websites for developers, designers, and freelancers to showcase their skills and projects.",
    },
  ];



  return (

<div id="services" className="third-section" >
  <Container>
    <h1>my services</h1>
    <p>here are some of the services i offer:</p>
    <div className="services">
      {services.map((serve)=>(
 <motion.div
 key={serve.id}
 className="service "
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: serve.id * 0.2 }}
 viewport={{ once: true }}
>
 <div className="text-3xl text-blue-500 mb-4">{serve.icon}</div>
 <h3 className="text-xl font-semibold mb-2">{serve.title}</h3>
 <p className="text-gray-600">{serve.description}</p>
</motion.div>
      ))}
    </div>
  </Container>
</div>

  )
}

export default Services