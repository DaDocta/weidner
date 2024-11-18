import React from 'react';
import '../styles/About.css';
import Picture from '../assets/Picture.jpg';
import { FaLightbulb, FaBriefcase, FaUsers } from 'react-icons/fa'; // Icons for business theme

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi, I'm Lucas Fedders, a driven leader and problem solver passionate about 
            innovation and strategy. My journey began as a go-kart mechanic, where I honed 
            troubleshooting and creative thinking skills. 
          </p>
          <p>
            As a varsity soccer player and Young Life leader, I've developed leadership 
            qualities and the ability to inspire and collaborate effectively. My goal is 
            to drive meaningful impact in the business world through innovative solutions.
          </p>
          <div className="about-icons">
            <div className="icon-item">
              <FaLightbulb className="icon" />
              <span>Problem Solver</span>
            </div>
            <div className="icon-item">
              <FaBriefcase className="icon" />
              <span>Strategic Thinker</span>
            </div>
            <div className="icon-item">
              <FaUsers className="icon" />
              <span>Team Leader</span>
            </div>
          </div>
        </div>
        <img 
          src={Picture}
          alt="Lucas Fedders" 
          className="about-image" 
        />
      </div>
    </div>
  );
};

export default About;
