import React from 'react';
import '../styles/Skills.css';
import { FaPaintBrush, FaPalette, FaShareAlt } from 'react-icons/fa'; // Icons for services

const services = [
  {
    title: 'Logo Design',
    description: 'Unique and memorable logos that perfectly capture the brand\'s essence, boosting brand recognition and connecting with your audience.',
    icon: <FaPaintBrush />,
  },
  {
    title: 'Custom Backgrounds',
    description: 'Creating stunning, tailored backgrounds to enhance digital content and elevate the aesthetic appeal of your visuals.',
    icon: <FaPalette />,
  },
  {
    title: 'Social Media Graphics',
    description: 'Eye-catching graphics designed to engage your audience and grow your social media presence while reflecting your brand identity.',
    icon: <FaShareAlt />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skillset</h2>
      <div className="skills-grid">
        {services.map((service, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
