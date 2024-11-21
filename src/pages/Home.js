import React from 'react';
import Placeholder from '../assets/Placeholder.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="area">
      <ul className="circles">
        {/* Render 10 floating circles */}
        {[...Array(10)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <section id="home" className="home">
        <div className="home-content">
          <h1 className="headline">
            <span className="primary">Design.</span>
            <span className="secondary">Collaborate.</span>
            <span className="tertiary">Transform.</span>
          </h1>
          <p className="tagline">
          "Creating visuals that inform, inspire, and drive results."
          </p>
          <a href="#about" className="cta-button">Know Me Better</a>
        </div>
        <div className="home-image">
          <img src={Placeholder} alt="Creative Design" />
        </div>
      </section>
    </div>
  );
};

export default Home;
