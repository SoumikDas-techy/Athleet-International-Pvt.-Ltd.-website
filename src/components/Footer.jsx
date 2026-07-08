import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        © 2024–2025 Athleet International Sports Pvt Ltd. A Sports Ecosystem by Techno India Group.
      </div>
      <div className="footer-right">
        <a href="/" onClick={handleHomeClick}>Home</a>
        <Link to="/uksc">UKSC</Link>
        <Link to="/ajsdp">AJSDP</Link>
        <Link to="/academy">Academy</Link>
        <Link to="/mcfs">MCFS</Link>
        <a href="#consulting" onClick={(e) => handleNavClick(e, 'consulting')}>Consulting</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
