import React from 'react';
import '../styles/SkillsCard.css';
import { FaWrench, FaUserTie, FaTools, FaCamera, FaHammer } from 'react-icons/fa';

const skillIcons = {
  Mechanics: <FaWrench />,
  Leadership: <FaUserTie />,
  Troubleshooting: <FaTools />,
  'Drone Photography': <FaCamera />,
  Construction: <FaHammer />,
};

const SkillsCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skillIcons[skill.name]}</div>
      <h3>{skill.name}</h3>
      <p>{skill.level}</p>
    </div>
  );
};

export default SkillsCard;
