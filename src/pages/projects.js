// src/pages/projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard"; // Import the ProjectCard component
import styles from "../styles/Projects.module.css";

const projectsData = [
  {
    title: "Project One",
    description: "A brief description of project one.",
    link: "https://linktoproject1.com",
    image: "/assets/images/project1.png",
  },
  {
    title: "Project Two",
    description: "A brief description of project two.",
    link: "https://linktoproject2.com",
    image: "/assets/images/project2.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
