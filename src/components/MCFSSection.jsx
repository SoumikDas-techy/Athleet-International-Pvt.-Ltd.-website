import React from 'react';
import './MCFSSection.css';

const MCFSSection = () => {
  const programLevels = [
    {
      age: 'Play For Fun',
      ageRange: '6–8 Years Old',
      color: 'navy',
      points: ['New to the game', 'Gain confidence', 'Enjoy the game', 'Develop passion'],
    },
    {
      age: 'Play to Learn',
      ageRange: '9–11 Years Old',
      color: 'bright',
      points: ['Some experience', 'Build team mentality', 'Play like your hero', 'Understand the game'],
    },
    {
      age: 'Play For Progress',
      ageRange: '12–14 Years Old',
      color: 'gold',
      points: [
        'Grow within the game',
        'Improve performance',
        'Develop key skills',
        'Foreign trip exposure',
      ],
    },
    {
      age: 'Play to Perform',
      ageRange: '15–17 Years Old',
      color: 'red',
      points: [
        'Share your passion',
        'Showcase your talent',
        'Mature as a player',
        'International exposure',
      ],
    },
  ];

  return (
    <section className="mcfs-section" id="mcfs">
      <div className="section-header">
        <div className="section-tag">Vertical 04</div>
        <h2 className="section-title">Techno India Manchester City Football School</h2>
        <p className="section-desc">
          A premium football school bringing world-class football education to India through a landmark
          collaboration.
        </p>
      </div>
      <div className="mcfs-grid">
        <div>
          <div className="mcfs-logo-area">
            <div className="mcfs-collab">Official Collaboration</div>
            <div className="mcfs-logos">
              <div className="mcfs-logo-badge ti">Techno India Group</div>
              <div className="mcfs-logo-separator">×</div>
              <div className="mcfs-logo-badge mc">Manchester City FC</div>
            </div>
            <p className="mcfs-desc">
              Licensed Manchester City coaches. Same methodologies as their global training centres.
              FIFA-approved artificial turf. Holistic player growth — technical, tactical, physical, and
              psychological development.
            </p>
            <div className="mcfs-badges">
              <span className="mcfs-badge">Boys & Girls</span>
              <span className="mcfs-badge">Ages 5–17</span>
              <span className="mcfs-badge">FIFA Turf</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mcfs-program-title">Programme Levels</h3>
          <div className="program-levels">
            {programLevels.map((level, index) => (
              <div key={index} className={`program-level ${level.color}`}>
                <div className="prog-age">{level.age}</div>
                <div className={`prog-name prog-color-${level.color}`}>{level.ageRange}</div>
                <ul className="prog-points">
                  {level.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MCFSSection;
