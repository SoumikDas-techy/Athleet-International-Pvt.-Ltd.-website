import React from 'react';
import { Sprout, School, Trophy, BarChart3, Globe2, Handshake } from 'lucide-react';
import './PillarsBar.css';

const PillarsBar = () => {
  const pillars = [
    { icon: <Sprout size={32} strokeWidth={1.8} />, label: 'Grassroots Development' },
    { icon: <School size={32} strokeWidth={1.8} />, label: 'School Sports Integration' },
    { icon: <Trophy size={32} strokeWidth={1.8} />, label: 'Athlete Pathways' },
    { icon: <BarChart3 size={32} strokeWidth={1.8} />, label: 'Technology & Analytics' },
    { icon: <Globe2 size={32} strokeWidth={1.8} />, label: 'International Exposure' },
    { icon: <Handshake size={32} strokeWidth={1.8} />, label: 'Sports Consulting' },
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