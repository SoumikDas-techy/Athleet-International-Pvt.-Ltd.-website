import React from 'react';
import './LeadershipSection.css';

const LeadershipSection = () => {
  const leaders = [
    {
      initials: 'SR',
      role: 'Managing Director',
      name: "Hon'ble Shri Satyam Roychowdhury",
    },
    {
      initials: 'DR',
      role: 'Director',
      name: 'Mr. Debdut Roychowdhury',
    },
    {
      initials: 'SD',
      role: 'Director',
      name: 'Ms. Sohinee Debnath',
    },
  ];

  return (
    <section className="leadership-section" id="leadership">
      <div className="section-header">
        <div className="section-tag">The Team</div>
        <h2 className="section-title">Our Leadership</h2>
        <p className="section-desc">
          Visionary leaders driving India's next generation of sports development.
        </p>
      </div>
      <div className="leaders-grid">
        {leaders.map((leader, index) => (
          <div key={index} className="leader-card">
            <div className="leader-avatar">{leader.initials}</div>
            <div className="leader-role">{leader.role}</div>
            <div className="leader-name">{leader.name}</div>
          </div>
        ))}
      </div>
      <p className="leadership-footer">
        A Sports Ecosystem by <strong>Techno India Group</strong>
      </p>
    </section>
  );
};

export default LeadershipSection;
