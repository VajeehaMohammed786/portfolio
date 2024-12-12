// src/pages/projects.js
import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/projects.css';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '60px' }}> {/* Add padding to prevent navbar overlap */}
        <h1>Projects</h1>

        {/* Project Cards */}
        <div className="project-card">
          <img src="project1-image.jpg" alt="Project One" />
          <h3>Project One</h3>
          <p>A brief description of project one.</p>
          <a href="/project-one">View Project</a>
        </div>

        <div className="project-card">
          <img src="project2-image.jpg" alt="Project Two" />
          <h3>Project Two</h3>
          <p>A brief description of project two.</p>
          <a href="/project-two">View Project</a>
        </div>
      </main>
    </div>
  );
};

export default Projects;
