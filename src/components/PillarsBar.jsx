import React from 'react';
import './PillarsBar.css';

const PillarsBar = () => {
  const pillars = [
    { icon: '🌱', label: 'Grassroots Development' },
    { icon: '🏫', label: 'School Sports Integration' },
    { icon: '🏃', label: 'Athlete Pathways' },
    { icon: '📊', label: 'Technology & Analytics' },
    { icon: '🌍', label: 'International Exposure' },
    { icon: '🤝', label: 'Sports Consulting' },
  ];

  return (
    <div className="pillars">
      {pillars.map((pillar, index) => (
        <div key={index} className="pillar-item">
          <div className="pillar-icon">{pillar.icon}</div>
          <div className="pillar-label">{pillar.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PillarsBar;
