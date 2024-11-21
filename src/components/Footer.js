import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBehance } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 Nate Weidner</p>
      <ul className="footer-social">
        <li><a href="https://facebook.com/YourFacebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/YourInstagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        <li><a href="https://www.behance.net/YourBehance" target="_blank" rel="noopener noreferrer"><FaBehance /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
