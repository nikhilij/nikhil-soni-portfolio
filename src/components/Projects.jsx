import React from "react";
import "./Projects.css";

const Projects = () => {
  // Dummy project data
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "Developed a responsive e-commerce website using React and Node.js. Integrated with Stripe for payment processing and MongoDB for database management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Social Media App",
      description:
        "Created a social media application that allows users to post updates, follow other users, and like/comment on posts. Built with React, Firebase, and Redux.",
      tags: ["React", "Firebase", "Redux"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management System",
      description:
        "Designed and implemented a task management system for internal use. Utilized Django for backend API development and React for the frontend interface.",
      tags: ["Django", "React", "REST API"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio website to showcase projects and skills. Designed with HTML, CSS, and JavaScript, and deployed using GitHub Pages.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Mobile App Development",
      description:
        "Led a team in creating a mobile app for event management. Used Flutter framework for cross-platform compatibility and integrated with Firebase backend services.",
      tags: ["Flutter", "Firebase", "Mobile App"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Designed and implemented a data visualization dashboard for analyzing sales data. Used Python with Dash framework and Plotly library for interactive charts.",
      tags: ["Python", "Dash", "Plotly", "Data Visualization"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a real-time chat application using Socket.IO and React. Implemented features like user authentication, chat rooms, and message broadcasting.",
      tags: ["React", "Node.js", "Socket.IO", "Real-time"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Online Learning Platform",
      description:
        "Developed an online learning platform with video lectures, quizzes, and student progress tracking. Used Laravel for backend and Vue.js for frontend development.",
      tags: ["Laravel", "Vue.js", "MySQL", "Online Learning"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section className="projects">
      <h2 id="projects">Projects</h2>

      <div className="projectcard_container">
        {projectsData.map((project, index) => (
          <div className="project_card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <div className="project_links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
