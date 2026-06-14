import React from 'react'
import { FaReact, FaCode, FaFileCode, FaLaptopCode, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap'

const services = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Frontend Development",
    description: "Responsive and interactive UIs using React.js, HTML, CSS, and JavaScript with a focus on performance and UX.",
  },
  {
    id: 2,
    icon: <FaNodeJs />,
    title: "Backend Development",
    description: "Scalable server-side applications with Node.js and Express.js, following clean architecture and MVC patterns.",
  },
  {
    id: 3,
    icon: <MdApi />,
    title: "REST API Development",
    description: "Well-structured and secure REST APIs with authentication, validation, and proper error handling.",
  },
  {
    id: 4,
    icon: <SiMongodb />,
    title: "Database Design",
    description: "MongoDB schema design and integration using Mongoose with efficient queries and data modeling.",
  },
  {
    id: 5,
    icon: <FaFileCode />,
    title: "UI Design to Code",
    description: "Converting Figma or Adobe XD designs into clean, pixel-perfect, and functional web pages.",
  },
  {
    id: 6,
    icon: <FaCode />,
    title: "Landing Page Development",
    description: "Fast, responsive, and SEO-friendly landing pages to promote products, apps, or businesses.",
  },
  {
    id: 7,
    icon: <FaLaptopCode />,
    title: "Portfolio Websites",
    description: "Modern portfolio websites for developers, designers, and freelancers to showcase their work.",
  },
  {
    id: 8,
    icon: <SiExpress />,
    title: "Full-Stack MERN Apps",
    description: "End-to-end web applications built with MongoDB, Express.js, React.js, and Node.js from scratch.",
  },
];

const Services = () => {
  return (
    <div id="services" className="third-section">
      <Container>
        <h1>My Services</h1>
        <p>What I can build for you</p>
        <div className="services">
          {services.map((serve) => (
            <motion.div
              key={serve.id}
              className="service"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: serve.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{serve.icon}</div>
              <h3>{serve.title}</h3>
              <p>{serve.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Services