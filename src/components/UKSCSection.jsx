import React from 'react';
import './UKSCSection.css';

const UKSCPage = () => {
  return (
    <section className="uksc-section" id="uksc">
      {/* INTRO / CLUB ROSTER */}
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
          <p className="uksc-established">📅 Established: 14th April 2024 &nbsp;|&nbsp; For The Youth, By The Youth</p>
          <p className="uksc-intro-desc">United Kolkata Sports Club was started to create a structured pathway for young footballers by connecting grassroots development, academy football, elite training, and professional opportunities under one ecosystem.</p>
          <h3 className="uksc-sub-title">Achievements at a Glance</h3>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-team">Men's Team</div>
              <div className="achievement-text">CFL 1st Division Champions (2024–25)</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-team">Women's Team</div>
              <div className="achievement-text">Kanyashree Premier B Champions (2024–25)</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-team">Men's Team</div>
              <div className="achievement-text">Runners-up, IFA Futsal League (2024–25)</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-team">Women's Team</div>
              <div className="achievement-text">Runners-up, State Football Championship (2024)</div>
            </div>
          </div>
        </div>
        <div className="uksc-visual">
          <div className="uksc-visual-header">
            <h3>Club Roster Highlights</h3>
          </div>
          <div className="uksc-team-row">
            <div className="uksc-team-col">
              <div className="uksc-team-label">⚽ Men's Key Signings</div>
              <span className="player-tag">Narayan Das</span>
              <span className="player-tag">Pragyan Gogoi</span>
              <span className="player-tag">Nongdamba Naorem</span>
              <span className="player-tag">Vinil Poojary</span>
              <span className="player-tag">Amit Tudu</span>
              <span className="player-tag">Jiten Murmu</span>
            </div>
            <div className="uksc-team-col">
              <div className="uksc-team-label">⚽ Women's Key Signings</div>
              <span className="player-tag">Nitu Linda</span>
              <span className="player-tag">Anita Kumari</span>
              <span className="player-tag">Kai Rumi</span>
              <span className="player-tag">Puja Karmakar</span>
              <span className="player-tag">Jyoti Sharma</span>
              <span className="player-tag">Ani Tayang</span>
            </div>
          </div>
          <div className="key-signings">
            <div className="key-signings-label">Impact on Bengal Football</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className="player-tag" style={{ borderColor: 'rgba(245,166,35,0.4)', color: 'var(--gold)' }}>Strengthening professional ecosystem</span>
              <span className="player-tag" style={{ borderColor: 'rgba(245,166,35,0.4)', color: 'var(--gold)' }}>Pathways for local talent</span>
              <span className="player-tag" style={{ borderColor: 'rgba(245,166,35,0.4)', color: 'var(--gold)' }}>Reviving competitive football culture</span>
              <span className="player-tag" style={{ borderColor: 'rgba(245,166,35,0.4)', color: 'var(--gold)' }}>Inspiring youth participation</span>
            </div>
          </div>
        </div>
      </div>

      {/* FIXTURES & RESULTS */}
      <div className="section-header" style={{ marginTop: '80px' }}>
        <div className="section-tag">Club Information</div>
        <h2 className="section-title">Fixtures & Results</h2>
        <p className="section-desc">Stay updated with our latest match schedules, results, and league standings.</p>
      </div>
      <div className="uksc-fixtures-grid">
        <div>
          <h3 className="uksc-sub-title">⚽ Upcoming Fixtures</h3>
          <div className="uksc-cards-stack">
            <div className="uksc-fixture-card">
              <div className="uksc-fixture-tag">CFL 1st Division</div>
              <div className="uksc-fixture-title">UKSC vs FC Goa</div>
              <div className="uksc-fixture-details">📅 February 15, 2025 &nbsp;| &nbsp;🕒 6:00 PM IST</div>
            </div>
            <div className="uksc-fixture-card">
              <div className="uksc-fixture-tag">State Football Championship</div>
              <div className="uksc-fixture-title">UKSC Women vs Punjab FC Women</div>
              <div className="uksc-fixture-details">📅 February 18, 2025 &nbsp;| &nbsp;🕒 4:30 PM IST</div>
            </div>
            <div className="uksc-fixture-card">
              <div className="uksc-fixture-tag">Futsal Cup</div>
              <div className="uksc-fixture-title">UKSC Futsal vs Mumbai Futsal Club</div>
              <div className="uksc-fixture-details">📅 February 22, 2025 &nbsp;| &nbsp;🕒 7:00 PM IST</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="uksc-sub-title">📊 Recent Results</h3>
          <div className="uksc-cards-stack">
            <div className="uksc-result-card victory">
              <div className="uksc-result-status">✓ Victory</div>
              <div className="uksc-result-title">UKSC 3 - 1 Mohan Bagan</div>
              <div className="uksc-result-details">📅 February 8, 2025 &nbsp;| &nbsp;CFL 1st Division</div>
            </div>
            <div className="uksc-result-card victory">
              <div className="uksc-result-status">✓ Victory</div>
              <div className="uksc-result-title">UKSC Women 2 - 0 Bengal Women</div>
              <div className="uksc-result-details">📅 February 1, 2025 &nbsp;| &nbsp;Kanyashree Premier</div>
            </div>
            <div className="uksc-result-card draw">
              <div className="uksc-result-status">Draw</div>
              <div className="uksc-result-title">UKSC Futsal 2 - 2 Delhi United</div>
              <div className="uksc-result-details">📅 January 28, 2025 &nbsp;| &nbsp;IFA Futsal League</div>
            </div>
          </div>
        </div>
      </div>
      <div className="uksc-stats-grid">
        <div className="uksc-stat-card">
          <div className="uksc-stat-num">12</div>
          <div className="uksc-stat-label">Matches Played</div>
        </div>
        <div className="uksc-stat-card">
          <div className="uksc-stat-num">8</div>
          <div className="uksc-stat-label">Wins</div>
        </div>
        <div className="uksc-stat-card">
          <div className="uksc-stat-num">28</div>
          <div className="uksc-stat-label">Goals Scored</div>
        </div>
        <div className="uksc-stat-card">
          <div className="uksc-stat-num">24 pts</div>
          <div className="uksc-stat-label">League Position</div>
        </div>
      </div>

      {/* NEWS & UPDATES */}
      <div className="section-header uksc-news-header">
        <div className="section-tag">Latest Updates</div>
        <h2 className="section-title">News & Club Updates</h2>
        <p className="section-desc">Breaking news, match reports, transfer updates, and important club announcements.</p>
      </div>
      <div className="uksc-news-grid">
        <div className="uksc-news-card">
          <div className="uksc-news-image bg-gradient-navy">📰</div>
          <div className="uksc-news-content">
            <div className="uksc-news-tag">Match Report</div>
            <h4 className="uksc-news-title">UKSC Defeats Mohan Bagan in Thrilling Encounter</h4>
            <p className="uksc-news-desc">A brilliant display of attacking football saw UKSC secure a vital 3-1 victory over Mohan Bagan in the CFL 1st Division.</p>
            <div className="uksc-news-date">📅 Feb 8, 2025</div>
          </div>
        </div>
        <div className="uksc-news-card">
          <div className="uksc-news-image bg-gradient-gold">🔄</div>
          <div className="uksc-news-content">
            <div className="uksc-news-tag">Transfer News</div>
            <h4 className="uksc-news-title">Two International Players Join UKSC</h4>
            <p className="uksc-news-desc">UKSC announces the signing of two experienced international players to strengthen the squad for the upcoming season.</p>
            <div className="uksc-news-date">📅 Feb 5, 2025</div>
          </div>
        </div>
        <div className="uksc-news-card">
          <div className="uksc-news-image bg-gradient-green">📢</div>
          <div className="uksc-news-content">
            <div className="uksc-news-tag">Announcement</div>
            <h4 className="uksc-news-title">Women's Team Achieves Championship Status</h4>
            <p className="uksc-news-desc">UKSC Women's team crowned champions of Kanyashree Premier B with an impressive unbeaten campaign.</p>
            <div className="uksc-news-date">📅 Feb 1, 2025</div>
          </div>
        </div>
      </div>

      {/* PHOTO & VIDEO GALLERY */}
      <div className="section-header uksc-gallery-header">
        <div className="section-tag">Visual Content</div>
        <h2 className="section-title">Photo & Video Gallery</h2>
        <p className="section-desc">Explore exclusive match moments, training sessions, and behind-the-scenes content.</p>
      </div>
      <div className="uksc-gallery-main-grid">
        <div className="uksc-gallery-video-card">
          🎥
          <div className="uksc-gallery-overlay">
            <div className="uksc-gallery-tag text-gold">FEATURED VIDEO</div>
            <div className="uksc-gallery-title">UKSC vs Mohan Bagan - Match Highlights</div>
          </div>
        </div>
        <div className="uksc-gallery-card-gold">
          📸
          <div className="uksc-gallery-overlay small">
            <div className="uksc-gallery-tag text-white-mute">MATCH GALLERY</div>
            <div className="uksc-gallery-title text-white">87 Photos</div>
          </div>
        </div>
        <div className="uksc-gallery-card-green">
          🏋️
          <div className="uksc-gallery-overlay small">
            <div className="uksc-gallery-tag text-white-mute">TRAINING SESSIONS</div>
            <div className="uksc-gallery-title text-white">52 Videos</div>
          </div>
        </div>
      </div>
      <div className="uksc-gallery-sub-grid">
        <div className="uksc-gallery-sub-item bg-red">🎬</div>
        <div className="uksc-gallery-sub-item bg-teal">📷</div>
        <div className="uksc-gallery-sub-item bg-blue">🎞️</div>
        <div className="uksc-gallery-sub-item bg-orange">🎥</div>
      </div>

      {/* CLUB HONOURS & ACHIEVEMENTS */}
      <div className="uksc-honours-container">
        <div className="section-header">
          <div className="section-tag text-gold">Club Legacy</div>
          <h2 className="section-title light">Club Honours & Achievements</h2>
          <p className="section-desc light">Celebrating milestones and trophy successes since our foundation in 2024.</p>
        </div>
        <div className="uksc-honours-grid">
          <div className="uksc-honours-card">
            <div className="uksc-honours-card-title">🏆 Championship Titles</div>
            <div className="uksc-honours-card-list">
              <div>CFL 1st Division Champions (2024–25)</div>
              <div>Kanyashree Premier B Champions (2024–25)</div>
              <div>Bengal Super Cup Runners-up (2024)</div>
            </div>
          </div>
          <div className="uksc-honours-card">
            <div className="uksc-honours-card-title">🥇 Notable Achievements</div>
            <div className="uksc-honours-card-list">
              <div>IFA Futsal League Runners-up (2024–25)</div>
              <div>State Football Championship Runners-up (2024)</div>
              <div>Best Young Player Award (2024–25)</div>
            </div>
          </div>
        </div>
        <div className="uksc-honours-stats">
          <div className="uksc-honours-stat-card">
            <div className="uksc-honours-stat-num">6</div>
            <div className="uksc-honours-stat-label">Trophies Won</div>
          </div>
          <div className="uksc-honours-stat-card">
            <div className="uksc-honours-stat-num">50+</div>
            <div className="uksc-honours-stat-label">Matches Played</div>
          </div>
          <div className="uksc-honours-stat-card">
            <div className="uksc-honours-stat-num">150+</div>
            <div className="uksc-honours-stat-label">Goals Scored</div>
          </div>
          <div className="uksc-honours-stat-card">
            <div className="uksc-honours-stat-num">2</div>
            <div className="uksc-honours-stat-label">Seasons Active</div>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM */}
      <div className="section-header uksc-team-header">
        <div className="section-tag">Our Squad</div>
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-desc">Get to know the talented players, coaching staff, and management leading UKSC.</p>
      </div>

      <h3 className="uksc-team-category-title">⚽ Players</h3>
      <div className="uksc-players-grid">
        <div className="uksc-player-card">
          <div className="uksc-player-avatar-bg bg-navy">👤</div>
          <div className="uksc-player-info">
            <div className="uksc-player-name">Narayan Das</div>
            <div className="uksc-player-role">Forward</div>
            <div className="uksc-player-team-tag">Men's Team</div>
          </div>
        </div>
        <div className="uksc-player-card">
          <div className="uksc-player-avatar-bg bg-blue">👤</div>
          <div className="uksc-player-info">
            <div className="uksc-player-name">Pragyan Gogoi</div>
            <div className="uksc-player-role">Midfielder</div>
            <div className="uksc-player-team-tag">Men's Team</div>
          </div>
        </div>
        <div className="uksc-player-card">
          <div className="uksc-player-avatar-bg bg-green">👤</div>
          <div className="uksc-player-info">
            <div className="uksc-player-name">Nitu Linda</div>
            <div className="uksc-player-role">Forward</div>
            <div className="uksc-player-team-tag">Women's Team</div>
          </div>
        </div>
        <div className="uksc-player-card">
          <div className="uksc-player-avatar-bg bg-orange">👤</div>
          <div className="uksc-player-info">
            <div className="uksc-player-name">Vinil Poojary</div>
            <div className="uksc-player-role">Defender</div>
            <div className="uksc-player-team-tag">Men's Team</div>
          </div>
        </div>
      </div>

      <h3 className="uksc-team-category-title">👨‍🏫 Coaching Staff</h3>
      <div className="uksc-coaching-grid">
        <div className="uksc-coaching-card">
          <div className="uksc-coaching-icon">👨‍🎓</div>
          <div className="uksc-coaching-title">Head Coach - Men's Team</div>
          <div className="uksc-coaching-desc">International Coaching Experience</div>
          <div className="uksc-coaching-tag">20+ Years in Football</div>
        </div>
        <div className="uksc-coaching-card">
          <div className="uksc-coaching-icon">👩‍🎓</div>
          <div className="uksc-coaching-title">Head Coach - Women's Team</div>
          <div className="uksc-coaching-desc">Former Professional Player</div>
          <div className="uksc-coaching-tag">15+ Years Experience</div>
        </div>
        <div className="uksc-coaching-card">
          <div className="uksc-coaching-icon">🏋️</div>
          <div className="uksc-coaching-title">Fitness & Sports Science</div>
          <div className="uksc-coaching-desc">Certified Strength Coach</div>
          <div className="uksc-coaching-tag">Specialized Training</div>
        </div>
      </div>

      <h3 className="uksc-team-category-title">👨‍💼 Management</h3>
      <div className="uksc-management-grid">
        <div className="uksc-management-card">
          <div className="uksc-management-flex">
            <div className="uksc-management-icon">👔</div>
            <div className="uksc-management-info">
              <div className="uksc-management-title">Club Director</div>
              <div className="uksc-management-desc">Strategic Leadership & Administration</div>
              <div className="uksc-management-tag">Overseeing Club Operations</div>
            </div>
          </div>
        </div>
        <div className="uksc-management-card">
          <div className="uksc-management-flex">
            <div className="uksc-management-icon">📊</div>
            <div className="uksc-management-info">
              <div className="uksc-management-title">Football Operations Manager</div>
              <div className="uksc-management-desc">Match Management & Team Coordination</div>
              <div className="uksc-management-tag">Day-to-Day Club Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKSCPage;