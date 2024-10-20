import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="mobile-nav-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Hamburger icon for mobile */}
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="aboutme" smooth={true} duration={500} onClick={toggleMenu}>About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
