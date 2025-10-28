import React from 'react'
import { Container } from 'react-bootstrap'

import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiBabel } from "react-icons/si";
const Skills = () => {
  return (

<div className="section-four" id="skills">
  <Container>
    <h1>My Skills</h1>
    <p className="text">Here are the tools, languages, and technologies I use to build modern and responsive web applications.</p>
    <div className="skills">
    <div className="skill">
  <div><FaHtml5 /></div>
  <p>HTML</p>
</div>

<div className="skill">
  <div><SiCss3 /></div>
  <p>CSS</p>
</div>

<div className="skill">
  <div><FaJs /></div>
  <p>JavaScript</p>
</div>

<div className="skill">
  <div><FaBootstrap /></div>
  <p>Bootstrap</p>
</div>

<div className="skill">
  <div><RiTailwindCssFill /></div>
  <p>Tailwind CSS</p>
</div>

<div className="skill">
  <div><IoLogoGithub /></div>
  <p>GitHub</p>
</div>

<div className="skill">
  <div><IoLogoReact /></div>
  <p>React</p>
</div>

<div className="skill">
  <div><SiNodedotjs /></div>
  <p>Node.js</p>
</div>

<div className="skill">
  <div><FaGitSquare /></div>
  <p>Git</p>
</div>

<div className="skill">
  <div><SiMongodb /></div>
  <p>MongoDB</p>
</div>

<div className="skill">
  <div><FiFigma /></div>
  <p>Figma</p>
</div>

<div className="skill">
  <div><TbBrandRedux /></div>
  <p>Redux</p>
</div>

<div className="skill">
  <div><SiReactrouter /></div>
  <p>React Router</p>
</div>

<div className="skill">
  <div><SiTypescript /></div>
  <p>TypeScript</p>
</div>

<div className="skill">
  <div><SiBabel /></div>
  <p>Babel</p>
</div>

    </div>
  </Container>
  {/* <div className="arrow"><FaArrowDown/></div> */}
</div>







  )
}

export default Skills