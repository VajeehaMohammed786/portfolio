// src/pages/about.js
import Header from '../components/Header';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p>I'm a web developer with a passion for creating amazing web experiences.</p>
      </main>
    </div>
  );
};

export default About;
