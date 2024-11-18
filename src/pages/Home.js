import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Lucas Fedders' Professional Portfolio</h1>
        <p>
          I am Lucas Fedders, a dedicated leader, problem solver, and aspiring business professional. My background spans
          hands-on mechanical work as a go-kart mechanic, leadership roles in Young Life, and the discipline of a varsity athlete.
        </p>
        <Link to="/portfolio" className="portfolio-link">Explore My Work</Link>
      </div>
    </div>
  );
};

export default Home;
