import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = ['home', 'about', 'consulting', 'leadership', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height + buffer

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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

  const isLinkActive = (path, sectionId) => {
    if (path) {
      return location.pathname === path;
    }
    if (sectionId) {
      if (location.pathname !== '/') return false;
      if (sectionId === 'about') {
        return activeSection === 'home' || activeSection === 'about' || activeSection === '';
      }
      return activeSection === sectionId;
    }
    return false;
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
        <li>
          <Link
            to="/"
            className={isLinkActive('/', 'about') ? 'active' : ''}
            onClick={handleLinkClick}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/uksc"
            className={isLinkActive('/uksc') ? 'active' : ''}
            onClick={handleLinkClick}
          >
            UKSC
          </Link>
        </li>
        <li>
          <Link
            to="/ajsdp"
            className={isLinkActive('/ajsdp') ? 'active' : ''}
            onClick={handleLinkClick}
          >
            AJSDP
          </Link>
        </li>
        <li>
          <Link
            to="/academy"
            className={isLinkActive('/academy') ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Academy
          </Link>
        </li>
        <li>
          <a
            href="#consulting"
            className={isLinkActive(null, 'consulting') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'consulting')}
          >
            Consulting
          </a>
        </li>
        <li>
          <a
            href="#leadership"
            className={isLinkActive(null, 'leadership') ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'leadership')}
          >
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