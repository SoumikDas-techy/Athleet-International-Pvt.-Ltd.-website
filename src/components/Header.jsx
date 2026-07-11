import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="nav-logo-img" />
          <div className="nav-logo-text">
            Athleet International
            <span className="nav-logo-sub">Sports Pvt Ltd</span>
          </div>
        </Link>
      </div>

      {/* Hamburger - only shows on mobile */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/uksc" onClick={handleLinkClick}>UKSC</Link></li>
        <li><Link to="/ajsdp" onClick={handleLinkClick}>AJSDP</Link></li>
        <li><Link to="/academy" onClick={handleLinkClick}>Academy</Link></li>
        <li>
          <a href="#consulting" onClick={(e) => handleNavClick(e, 'consulting')}>
            Consulting
          </a>
        </li>
        <li>
          <a href="#leadership" onClick={(e) => handleNavClick(e, 'leadership')}>
            Leadership
          </a>
        </li>
      </ul>

      {/* CTA Button - unchanged */}
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, 'contact')}
        className="nav-cta"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Header;