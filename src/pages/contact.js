// // src/pages/contact.js
// import Header from '../components/Header';
// import { useState } from 'react';

// const Contact = () => {
//   const [message, setMessage] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., using an API call)
//     alert('Message sent!');
//   };

//   return (
//     <div>
//       <Header />
//       <main className="container mx-auto p-4">
//         <h1 className="text-4xl font-bold">Contact Me</h1>
//         <form onSubmit={handleFormSubmit}>
//           <textarea 
//             value={message} 
//             onChange={(e) => setMessage(e.target.value)} 
//             className="border p-2 w-full"
//             placeholder="Write your message here"
//           />
//           <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Send</button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default Contact;


// src/pages/contact.js
import React from "react";
import ContactForm from "../components/ContactForm"; // Import your contact form

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
