import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* 📌 Top Banner */}
      <div className="top-banner">
        <div className="banner-item">
          <a href="mailto:glassbonescreative@gmail.com">glassbonescreative@gmail.com</a>
        </div>
        <span className="banner-separator">|</span>
        <div className="banner-item">
          <span>120 Vellakulam, Kilambakkam Post, Tiruvallur- 602 02</span>
        </div>
        <span className="banner-separator">|</span>
        <div className="banner-item">
          <a href="tel:+91 93604 60661 ">+91 93604 60661</a>
        </div>
      </div>

      {/* 📌 Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/gcnlogonobg.png" alt="Glassbones Logo" className="navbar-logo-img" />
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
          <li><a href="#home" className="btn" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about-us" className="btn" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#our-services" className="btn" onClick={() => setMenuOpen(false)}>Our Services</a></li>
          <li><a href="#contact-us" className="btn" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


