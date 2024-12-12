// src/components/ProjectCard.js
import React from 'react';
import styles from '../styles/Projects.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
      />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
