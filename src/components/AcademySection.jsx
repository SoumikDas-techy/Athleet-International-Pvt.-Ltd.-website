import React from 'react';
import { GraduationCap, ClipboardList, Trophy, Users } from 'lucide-react';
import './AcademySection.css';

const AcademySection = () => {
  const ageGroups = [
    {
      range: '4–7 Yrs',
      name: 'Grassroots',
      desc: 'Fun-first environment to develop a passion for sport and build basic physical literacy.',
    },
    {
      range: '8–11 Yrs',
      name: 'Development',
      desc: 'Skill building, technique development and introduction to team sports concepts.',
    },
    {
      range: '12–15 Yrs',
      name: 'Performance',
      desc: 'Competitive training, tactical understanding, and Individual Development Plans.',
    },
    {
      range: '16–18 Yrs',
      name: 'Elite',
      desc: 'Elite pathway training, match exposure, and professional opportunity pathways.',
    },
  ];

  const deliverables = [
    { icon: <GraduationCap size={28} strokeWidth={1.8} />, label: 'Structured Coaching Methodology' },
    { icon: <ClipboardList size={28} strokeWidth={1.8} />, label: 'Individual Development Plans (IDP)' },
    { icon: <Trophy size={28} strokeWidth={1.8} />, label: 'Regular Match & Tournament Exposure' },
    { icon: <Users size={28} strokeWidth={1.8} />, label: 'Parent Engagement Framework' },
  ];

  return (
    <section className="academy-section" id="academy">
      <div className="section-header">
        <div className="section-tag">Vertical 03</div>
        <h2 className="section-title light">UKSC Academy</h2>
        <p className="section-desc light">
          A visionary sports development initiative revolutionizing youth sports — a high-performance,
          tech-enabled, athlete-first environment.
        </p>
      </div>
      <div className="academy-grid">
        <div>
          <p className="academy-intro">
            UKSC Academy nurtures aspiring young athletes aged 4–18 across multiple sports disciplines,
            building a sustainable sports ecosystem through grassroots development, youth engagement, and
            professional training.
          </p>
          <div className="academy-age-groups">
            {ageGroups.map((group, index) => (
              <div key={index} className="age-group-card">
                <div className="age-group-range">{group.range}</div>
                <div className="age-group-name">{group.name}</div>
                <div className="age-group-desc">{group.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="academy-delivers">
            <div className="delivers-title">What We Deliver</div>
            <div className="delivers-grid">
              {deliverables.map((item, index) => (
                <div key={index} className="deliver-item">
                  <div className="deliver-icon">{item.icon}</div>
                  <div className="deliver-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="academy-value-boxes">
            <div className="value-box youths-box">
              <div className="value-box-label">For Youths</div>
              <ul className="value-box-list">
                <li>Professional Coaching</li>
                <li>Personalized IDPs</li>
                <li>Performance Tracking</li>
                <li>Competitive Exposure</li>
                <li>Elite Football Pathway</li>
              </ul>
            </div>
            <div className="value-box society-box">
              <div className="value-box-label">For Society</div>
              <ul className="value-box-list">
                <li>Strengthening Football Culture</li>
                <li>Creating Sports Careers</li>
                <li>Driving Grassroots Participation</li>
                <li>Building Regional Football</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;