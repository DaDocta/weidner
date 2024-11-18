import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Lucas Fedders | All Rights Reserved</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:lucasfedders@example.com">Email Me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
