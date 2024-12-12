// src/pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>
        <h1>About Me</h1>
        <p>This is the about page.</p>
      </main>
    </div>
  );
};

export default About;
