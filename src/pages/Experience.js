import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Mechanic',
    company: 'Full Throttle Adrenaline Park & Event Center',
    duration: 'May 2022 - Aug 2022',
    description:
      'Fixed broken go-karts and provided regular checkups. Developed troubleshooting and problem-solving skills.',
  },
  {
    title: 'Construction Worker',
    company: 'Fedders Construction',
    duration: 'May 2019 - Aug 2021',
    description:
      'Organized contractors, cleaned project sites, and captured drone photos of projects.',
  },
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map(exp => (
          <ExperienceCard key={exp.title} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
