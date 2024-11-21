import React, { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="about-content">
        <h2>What's Good? I'm Nate Weidner</h2>
        <p>I’m passionate about Graphic Design. Check out some of my work from over the years!</p>
        <a href="#gallery" className="cta-button">See My Work!</a>
      </div>
    </section>
  );
};

export default About;
