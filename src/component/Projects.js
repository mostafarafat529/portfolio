import React from "react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiVite } from "react-icons/si";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// صور المشاريع
import imagegym from "../images/Annotation 2025-04-21 035124.png";
import imageecommerce from "../images/Annotation 2025-10-25 175716.png";
import imageyoutube from "../images/Annotation 2025-10-03 014734.png";
import imagebookmark from "../images/Annotation 2025-06-14 170822.png";
import imageapis from "../images/Annotation 2025-08-16 133808.png";
import imagedesignheven from "../images/Annotation 2025-10-28 140139.png";
import imageagency from "../images/Annotation 2025-10-28 140118.png";
import imageanimated from "../images/Annotation 2025-10-04 014337.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      image: imageecommerce,
      description:
        "A complete online store with product filtering, cart management, and localStorage.",
      tools: [<FaReact />, <SiTailwindcss />, <FaJs />],
      demoLink: "https://e-commerce2-shop.netlify.app",
      codeLink: "https://github.com/mostafarafat529/E_Commerce",
    },
    {
      id: 2,
      title: "Webverse (API Projects Hub)",
      image: imageapis,
      description:
        "A hub that collects all my API-based projects like Weather, Movies, and Notes apps.",
      tools: [<FaReact />, <SiVite />, <FaJs />],
      demoLink: "https://webverse-api.netlify.app/",
      codeLink: "https://github.com/mostafarafat529/webversed",
    },
    {
      id: 3,
      title: "YouTube Clone",
      image: imageyoutube,
      description:
        "A YouTube clone with video search, player, and channel pages using YouTube Data API.",
      tools: [<FaReact />, <SiRedux />, <FaJs />],
      demoLink: "https://youtube9clone.netlify.app",
      codeLink: "https://github.com/mostafarafat529/youtube-clone",
    },
    {
      id: 4,
      title: "Animated Portfolio",
      image: imageanimated,
      description:
        "My personal animated portfolio built with React and Framer Motion.",
      tools: [<FaReact />, <SiTailwindcss />, <FaJs />],
      demoLink: "https://animated7portfolio.netlify.app/",
      codeLink: "https://github.com/mostafarafat529/animated-portfolio",
    },
    {
      id: 5,
      title: "Gym Simple Website",
      image: imagegym,
      description:
        "A simple responsive gym website showcasing training plans and trainers.",
      tools: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      demoLink: "https://mostafa-gym-exercises.netlify.app",
      codeLink: "https://github.com/mostafarafat529/gym-exercises",
    },
    {
      id: 6,
      title: "Bookmark Manager",
      image: imagebookmark,
      description:
        "A web app to manage bookmarks with full CRUD operations using React and LocalStorage.",
      tools: [<FaReact />, <FaJs />, <FaCss3Alt />],
      demoLink: "https://tangerine-cajeta-7da47f.netlify.app",
    },
    {
      id: 7,
      title: "Design Heaven",
      image: imagedesignheven,
      description:
        "A responsive landing page created using pure HTML, CSS, and JavaScript.",
      tools: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      demoLink: "https://design-haven.netlify.app/",
      codeLink: "https://github.com/mostafarafat529/Design-Haven",
    },
    {
      id: 8,
      title: "Creative Agency Template",
      image: imageagency,
      description:
        "A multi-section website built from Elzero template challenge.",
      tools: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      demoLink: "https://creative-agency-template1.netlify.app/",
      codeLink: "https://github.com/mostafarafat529/Creative-Agency-Template",
    },
  ];

  return (
  <div className="section-projects">
  <h1>My Projects</h1>

  <div className="content-projects">
    <Swiper
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="project-slide">
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="project-tools">
                {project.tools.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="demo"
                >
                  Live Demo
                </a>
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="code"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

  );
};

export default Projects;
