import React from 'react';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Portfolio;
