import React from 'react';
import { Target, Telescope } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision" id="about">
      <div className="section-header">
        <div className="section-tag">Who We Are</div>
        <h2 className="section-title">Mission & Vision</h2>
        <p className="section-desc">
          Rooted in sporting culture, dedicated to identifying, nurturing and empowering the next
          generation of champions.
        </p>
      </div>
      <div className="mv-grid">
        <div className="mv-card">
          <div className="mv-card-label">
            <div className="mv-card-icon"><Target size={24} strokeWidth={1.8} /></div>
            Our Mission
          </div>
          <p>
            To create a transformative sports ecosystem dedicated to identifying, nurturing, and
            empowering the next generation of athletes, coaches, and sports leaders. Through
            world-class infrastructure, scientific training methodologies, and structured
            grassroots-to-elite pathways, we aim to connect local talent from school grounds to
            national and international platforms.
          </p>
          <div className="mv-card-watermark">M</div>
        </div>
        <div className="mv-card">
          <div className="mv-card-label">
            <div className="mv-card-icon"><Telescope size={24} strokeWidth={1.8} /></div>
            Our Vision
          </div>
          <p>
            To emerge as one of India's most impactful sports organisations, driven by the spirit
            and rich sporting heritage of the region, with a vision to discover, develop, and
            celebrate talent across every level of sport. By blending grassroots passion with
            global standards, we strive to build a sustainable sporting culture that inspires
            future generations.
          </p>
          <div className="mv-card-watermark">V</div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;