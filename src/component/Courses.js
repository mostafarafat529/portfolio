import React from 'react';
import { Container } from 'react-bootstrap';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { HiCheckBadge } from 'react-icons/hi2';

const courses = [
  {
    icon: <FaReact />,
    title: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "2025 — Present",
    status: "active",
    description: "Frontend Web Development with React.js — intensive government-backed program covering React, component architecture, hooks, state management, and API integration.",
    tags: ["React.js", "JavaScript", "REST APIs", "Git"],
  },
  {
    icon: <FaNodeJs />,
    title: "SEF Academy",
    period: "2025",
    status: "done",
    description: "Node.js Backend Development — covering Express.js, MongoDB, REST API design, JWT authentication, and MVC architecture.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "MVC"],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="courses-section">
      <Container>
        <h2>Courses & <span>Certifications</span></h2>
        <p className="courses-sub">Professional training and technical development.</p>

        <div className="courses">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>

              <div className="course-header">
                <div className="course-icon">{course.icon}</div>
                <div>
                  <h3>{course.title}</h3>
                  <span className="course-period">{course.period}</span>
                </div>
              </div>

              <span className={`course-status ${course.status === 'active' ? 'status-active' : 'status-done'}`}>
                {course.status === 'active' ? '● In Progress' : <><HiCheckBadge /> Completed</>}
              </span>

              <p>{course.description}</p>

              <div className="course-tags">
                {course.tags.map((tag) => (
                  <span key={tag} className="course-tag">{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Courses;