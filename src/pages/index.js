// src/pages/index.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '60px' }}> {/* Add padding to prevent navbar from overlapping */}
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page.</p>
      </main>
    </div>
  );
};

export default Home;
