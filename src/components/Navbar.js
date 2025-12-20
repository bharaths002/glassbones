import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* 📌 Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + "/gcnlogo.svg"}
            alt="Glassbones Logo"
            className="navbar-logo-img"
          />
          <div className="navbar-logo">Glassbones Creative Nexus</div>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="btn" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="btn" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#our-services" className="btn" onClick={() => setMenuOpen(false)}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#contact-us" className="btn" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
