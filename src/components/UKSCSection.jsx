import React from 'react';
import './UKSCSection.css';

const UKSCSection = () => {
  const menPlayers = [
    'Narayan Das',
    'Pragyan Gogoi',
    'Nongdamba Naorem',
    'Vinil Poojary',
    'Amit Tudu',
    'Jiten Murmu',
  ];

  const womenPlayers = [
    'Nitu Linda',
    'Anita Kumari',
    'Kai Rumi',
    'Puja Karmakar',
    'Jyoti Sharma',
    'Ani Tayang',
  ];

  const achievements = [
    { team: "Men's Team", text: 'CFL 1st Division Champions (2024–25)' },
    { team: "Women's Team", text: 'Kanyashree Premier B Champions (2024–25)' },
    { team: "Men's Team", text: 'Runners-up, IFA Futsal League (2024–25)' },
    { team: "Women's Team", text: 'Runners-up, State Football Championship (2024)' },
  ];

  const impacts = [
    'Strengthening professional ecosystem',
    'Pathways for local talent',
    'Reviving competitive football culture',
    'Inspiring youth participation',
  ];

  return (
    <section className="uksc-section" id="uksc">
      <div className="section-header">
        <div className="section-tag">Vertical 01</div>
        <h2 className="section-title">United Kolkata Sports Club</h2>
        <p className="section-desc">
          Established in 2024 under the vision of Techno India Group — building a modern, sustainable,
          professional football ecosystem.
        </p>
      </div>
      <div className="uksc-grid">
        <div>
          <div className="uksc-badges">
            <span className="uksc-badge">Men's Team</span>
            <span className="uksc-badge">Women's Team</span>
          </div>
          <p className="uksc-established">
            📅 Established: 14th April 2024 &nbsp;|&nbsp; For The Youth, By The Youth
          </p>
          <p className="uksc-description">
            United Kolkata Sports Club was started to create a structured pathway for young footballers
            by connecting grassroots development, academy football, elite training, and professional
            opportunities under one ecosystem.
          </p>
          <h3 className="uksc-achievements-title">Achievements at a Glance</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-team">{achievement.team}</div>
                <div className="achievement-text">{achievement.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="uksc-visual">
          <div className="uksc-visual-header">
            <h3>Club Roster Highlights</h3>
          </div>
          <div className="uksc-team-row">
            <div className="uksc-team-col">
              <div className="uksc-team-label">⚽ Men's Key Signings</div>
              <div className="players-container">
                {menPlayers.map((player, index) => (
                  <span key={index} className="player-tag">
                    {player}
                  </span>
                ))}
              </div>
            </div>
            <div className="uksc-team-col">
              <div className="uksc-team-label">⚽ Women's Key Signings</div>
              <div className="players-container">
                {womenPlayers.map((player, index) => (
                  <span key={index} className="player-tag">
                    {player}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="key-signings">
            <div className="key-signings-label">Impact on Bengal Football</div>
            <div className="impact-tags">
              {impacts.map((impact, index) => (
                <span key={index} className="player-tag impact-tag">
                  {impact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKSCSection;
