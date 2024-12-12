// src/pages/index.js
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p>This is a brief introduction to who I am and my work.</p>
      </main>
    </div>
  );
};

export default Home;
