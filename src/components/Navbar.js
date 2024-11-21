import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import Placeholder from '../assets/Placeholder.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={Placeholder} alt="Nate Weidner Logo" />
          <span className="navbar-title">Nate Weidner</span>
        </a>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
        <li><Link to="gallery" smooth={true} duration={500} onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>What I Do</Link></li>
        <li><Link to="reviews" smooth={true} duration={500} onClick={toggleMenu}>Reviews</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
