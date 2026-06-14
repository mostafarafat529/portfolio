import React from 'react'
import { Container } from 'react-bootstrap'
import { motion } from 'framer-motion'

import { FaHtml5, FaJs, FaBootstrap, FaGitSquare, FaNodeJs } from "react-icons/fa";
import { SiCss3, SiMongodb, SiTypescript, SiBabel, SiExpress, SiJsonwebtokens, SiPostman, SiReactquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub, IoLogoReact } from "react-icons/io5";
import { FiFigma } from "react-icons/fi";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />,       name: "HTML",         color: "#e34f26" },
  { icon: <SiCss3 />,        name: "CSS",          color: "#1572b6" },
  { icon: <FaJs />,          name: "JavaScript",   color: "#f7df1e" },
  { icon: <SiTypescript />,  name: "TypeScript",   color: "#3178c6" },
  { icon: <IoLogoReact />,   name: "React",        color: "#61dafb" },
  { icon: <TbBrandRedux />,  name: "Redux",        color: "#764abc" },
  { icon: <SiReactrouter />, name: "React Router", color: "#ca4245" },
  { icon: <SiReactquery />,  name: "React Query",  color: "#ff4154" },
  { icon: <RiTailwindCssFill />, name: "Tailwind", color: "#38bdf8" },
  { icon: <FaBootstrap />,   name: "Bootstrap",    color: "#7952b3" },
  { icon: <FaNodeJs />,      name: "Node.js",      color: "#3c873a" },
  { icon: <SiExpress />,     name: "Express.js",   color: "#ffffff" },
  { icon: <SiMongodb />,     name: "MongoDB",      color: "#47a248" },
  { icon: <SiJsonwebtokens />,name: "JWT",         color: "#d63aff" },
  { icon: <FaGitSquare />,   name: "Git",          color: "#f05032" },
  { icon: <IoLogoGithub />,  name: "GitHub",       color: "#ffffff" },
  { icon: <SiPostman />,     name: "Postman",      color: "#ff6c37" },
  { icon: <FiFigma />,       name: "Figma",        color: "#f24e1e" },
  { icon: <SiBabel />,       name: "Babel",        color: "#f9dc3e" },
];

const Skills = () => {
  return (
    <div className="section-four" id="skills">
      <Container>
        <h1>My Skills</h1>
        <p className="text">Tools, languages, and technologies I use to build full-stack web applications.</p>
        <div className="skills">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div style={{ color: skill.color }}>{skill.icon}</div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Skills