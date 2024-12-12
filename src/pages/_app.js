// src/pages/_app.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import '../styles/globals.css'; // Import global styles

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar /> {/* Render the Navbar */}
      <Component {...pageProps} /> {/* Render the current page component */}
    </>
  );
};

export default MyApp;
