// src/pages/contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/contact.css'; // Import CSS styles for contact page

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '60px' }}> {/* Add padding to avoid overlap with the navbar */}
        <h1>Contact Me</h1>
        <p>This is the contact page of my portfolio.</p>

        <div className={styles.contactCard}>
          <h3>Get in Touch</h3>
          <p>Feel free to reach out to me for inquiries, collaborations, or just to say hello!</p>

          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
