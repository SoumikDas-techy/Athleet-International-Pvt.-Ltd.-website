import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId) => {
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="nav-logo-link">
          <div className="nav-logo-mark">A</div>
          <div className="nav-logo-text">
            Athleet International
            <span className="nav-logo-sub">Sports Pvt Ltd</span>
          </div>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/uksc">UKSC</Link></li>
        <li><Link to="/ajsdp">AJSDP</Link></li>
        <li><Link to="/academy">Academy</Link></li>
        <li><Link to="/mcfs">MCFS</Link></li>
        <li><a href="#consulting" onClick={() => handleNavClick('consulting')}>Consulting</a></li>
        <li><a href="#leadership" onClick={() => handleNavClick('leadership')}>Leadership</a></li>
      </ul>
      <a href="#contact" onClick={() => handleNavClick('contact')} className="nav-cta">Contact Us</a>
    </nav>
  );
};

export default Header;
