import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-diagonal"></div>
      <div className="hero-athletes">
        <img
          className="hero-athletes-img"
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
          alt="Athletes"
        />
        <div className="hero-athletes-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">A Sports Ecosystem by Techno India Group</div>
        <h1 className="hero-title">
          Building An
          <span className="accent">Integrated</span>
          Sports Ecosystem
        </h1>
        <p className="hero-tagline">
          Creating Sustainable Pathways from School Grounds to National & International Platforms
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn-primary">
            Explore Our Verticals
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-num">3+</div>
            <div className="hero-stat-label">Sports Verticals</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">2024</div>
            <div className="hero-stat-label">Established</div>
          </div>
          <div className="hero-stat-item">
            <div className="hero-stat-num">4–18</div>
            <div className="hero-stat-label">Age Range</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
