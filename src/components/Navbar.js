// src/components/Navbar.js
import React from 'react';
import Link from 'next/link'; // Using Next.js's Link component for routing
import '../styles/navbar.css'; // Import the CSS file globally

const Navbar = () => {
  return (
    <nav className="navbar"> {/* Directly use the class name */}
      <ul className="navList"> {/* Directly use the class name */}
        <li className="navItem"> {/* Directly use the class name */}
          <Link href="/" className="navLink"> {/* Directly use the class name */}
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link href="/about" className="navLink">
            About
          </Link>
        </li>
        <li className="navItem">
          <Link href="/projects" className="navLink">
            Projects
          </Link>
        </li>
        <li className="navItem">
          <Link href="/contact" className="navLink">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
