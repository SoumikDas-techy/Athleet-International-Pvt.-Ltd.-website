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
          <p style={{ fontSize: '16px', color: '#5A6480', lineHeight: '1.8', marginBottom: '28px' }}>United Kolkata Sports Club was started to create a structured pathway for young footballers by connecting grassroots development, academy football, elite training, and professional opportunities under one ecosystem.</p>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '20px' }}>Achievements at a Glance</h3>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '24px' }}>⚽ Upcoming Fixtures</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid var(--gold)', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>CFL 1st Division</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC vs FC Goa</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 February 15, 2025 &nbsp;| &nbsp;🕒 6:00 PM IST</div>
            </div>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid var(--gold)', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>State Football Championship</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC Women vs Punjab FC Women</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 February 18, 2025 &nbsp;| &nbsp;🕒 4:30 PM IST</div>
            </div>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid var(--gold)', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>Futsal Cup</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC Futsal vs Mumbai Futsal Club</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 February 22, 2025 &nbsp;| &nbsp;🕒 7:00 PM IST</div>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '24px' }}>📊 Recent Results</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid #4CAF50', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', marginBottom: '4px' }}>✓ Victory</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC 3 - 1 Mohan Bagan</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 February 8, 2025 &nbsp;| &nbsp;CFL 1st Division</div>
            </div>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid #4CAF50', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', marginBottom: '4px' }}>✓ Victory</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC Women 2 - 0 Bengal Women</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 February 1, 2025 &nbsp;| &nbsp;Kanyashree Premier</div>
            </div>
            <div style={{ background: 'var(--off-white)', borderLeft: '4px solid #FF9800', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#FF9800', textTransform: 'uppercase', marginBottom: '4px' }}>Draw</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>UKSC Futsal 2 - 2 Delhi United</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📅 January 28, 2025 &nbsp;| &nbsp;IFA Futsal League</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: 'var(--navy)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: 'var(--white)' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold)', marginBottom: '4px' }}>12</div>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Matches Played</div>
        </div>
        <div style={{ background: 'var(--navy)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: 'var(--white)' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold)', marginBottom: '4px' }}>8</div>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Wins</div>
        </div>
        <div style={{ background: 'var(--navy)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: 'var(--white)' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold)', marginBottom: '4px' }}>28</div>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Goals Scored</div>
        </div>
        <div style={{ background: 'var(--navy)', borderRadius: '10px', padding: '20px', textAlign: 'center', color: 'var(--white)' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold)', marginBottom: '4px' }}>24 pts</div>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>League Position</div>
        </div>
      </div>

      {/* NEWS & UPDATES */}
      <div className="section-header" style={{ marginTop: '80px' }}>
        <div className="section-tag">Latest Updates</div>
        <h2 className="section-title">News & Club Updates</h2>
        <p className="section-desc">Breaking news, match reports, transfer updates, and important club announcements.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(10,27,61,0.08)', transition: 'transform 0.2s' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>📰</div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Match Report</div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', lineHeight: '1.4' }}>UKSC Defeats Mohan Bagan in Thrilling Encounter</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '12px' }}>A brilliant display of attacking football saw UKSC secure a vital 3-1 victory over Mohan Bagan in the CFL 1st Division.</p>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>📅 Feb 8, 2025</div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(10,27,61,0.08)', transition: 'transform 0.2s' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--blue-bright) 0%, var(--gold) 100%)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>🔄</div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Transfer News</div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', lineHeight: '1.4' }}>Two International Players Join UKSC</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '12px' }}>UKSC announces the signing of two experienced international players to strengthen the squad for the upcoming season.</p>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>📅 Feb 5, 2025</div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(10,27,61,0.08)', transition: 'transform 0.2s' }}>
          <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>📢</div>
          <div style={{ padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Announcement</div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', lineHeight: '1.4' }}>Women's Team Achieves Championship Status</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '12px' }}>UKSC Women's team crowned champions of Kanyashree Premier B with an impressive unbeaten campaign.</p>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>📅 Feb 1, 2025</div>
          </div>
        </div>
      </div>

      {/* PHOTO & VIDEO GALLERY */}
      <div className="section-header" style={{ marginTop: '80px' }}>
        <div className="section-tag">Visual Content</div>
        <h2 className="section-title">Photo & Video Gallery</h2>
        <p className="section-desc">Explore exclusive match moments, training sessions, and behind-the-scenes content.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ gridRow: 'span 2', background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)', borderRadius: '12px', overflow: 'hidden', minHeight: '420px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontSize: '80px', cursor: 'pointer', transition: 'transform 0.3s' }}>
          🎥
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold)', marginBottom: '4px' }}>FEATURED VIDEO</div>
            <div style={{ fontSize: '16px', fontWeight: 700 }}>UKSC vs Mohan Bagan - Match Highlights</div>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)', borderRadius: '12px', overflow: 'hidden', minHeight: '200px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', fontSize: '48px', cursor: 'pointer', transition: 'transform 0.3s' }}>
          📸
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(10,27,61,0.8), transparent)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>MATCH GALLERY</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--white)' }}>87 Photos</div>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)', borderRadius: '12px', overflow: 'hidden', minHeight: '200px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)', fontSize: '48px', cursor: 'pointer', transition: 'transform 0.3s' }}>
          🏋️
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>TRAINING SESSIONS</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--white)' }}>52 Videos</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        <div style={{ background: '#FF6B6B', borderRadius: '10px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}>🎬</div>
        <div style={{ background: '#4ECDC4', borderRadius: '10px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}>📷</div>
        <div style={{ background: '#45B7D1', borderRadius: '10px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}>🎞️</div>
        <div style={{ background: '#FFA07A', borderRadius: '10px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', cursor: 'pointer', transition: 'transform 0.2s' }}>🎥</div>
      </div>

      {/* CLUB HONOURS & ACHIEVEMENTS */}
      <div style={{ background: 'var(--navy)', padding: '80px 5%', color: 'var(--white)', margin: '80px -5% 0' }}>
        <div className="section-header">
          <div className="section-tag" style={{ color: 'var(--gold)' }}>Club Legacy</div>
          <h2 className="section-title light">Club Honours & Achievements</h2>
          <p className="section-desc light">Celebrating milestones and trophy successes since our foundation in 2024.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '48px' }}>
          <div style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>🏆 Championship Titles</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>CFL 1st Division Champions (2024–25)</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>Kanyashree Premier B Champions (2024–25)</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>Bengal Super Cup Runners-up (2024)</div>
            </div>
          </div>
          <div style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>🥇 Notable Achievements</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>IFA Futsal League Runners-up (2024–25)</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>State Football Championship Runners-up (2024)</div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>Best Young Player Award (2024–25)</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px', textAlign: 'center', borderTop: '3px solid var(--gold)' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--gold)', marginBottom: '6px' }}>6</div>
            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>Trophies Won</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px', textAlign: 'center', borderTop: '3px solid var(--gold)' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--gold)', marginBottom: '6px' }}>50+</div>
            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>Matches Played</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px', textAlign: 'center', borderTop: '3px solid var(--gold)' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--gold)', marginBottom: '6px' }}>150+</div>
            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>Goals Scored</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px', textAlign: 'center', borderTop: '3px solid var(--gold)' }}>
            <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--gold)', marginBottom: '6px' }}>2</div>
            <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }}>Seasons Active</div>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM */}
      <div className="section-header" style={{ marginTop: '80px' }}>
        <div className="section-tag">Our Squad</div>
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-desc">Get to know the talented players, coaching staff, and management leading UKSC.</p>
      </div>

      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '28px', textAlign: 'center' }}>⚽ Players</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '60px' }}>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', transition: 'transform 0.2s' }}>
          <div style={{ background: 'var(--navy)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>👤</div>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Narayan Das</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Forward</div>
            <div style={{ display: 'inline-block', background: 'rgba(245,166,35,0.1)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700 }}>Men's Team</div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', transition: 'transform 0.2s' }}>
          <div style={{ background: 'var(--blue)', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>👤</div>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Pragyan Gogoi</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Midfielder</div>
            <div style={{ display: 'inline-block', background: 'rgba(245,166,35,0.1)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700 }}>Men's Team</div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', transition: 'transform 0.2s' }}>
          <div style={{ background: '#4CAF50', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>👤</div>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Nitu Linda</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Forward</div>
            <div style={{ display: 'inline-block', background: 'rgba(245,166,35,0.1)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700 }}>Women's Team</div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', transition: 'transform 0.2s' }}>
          <div style={{ background: '#FF9800', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>👤</div>
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Vinil Poojary</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>Defender</div>
            <div style={{ display: 'inline-block', background: 'rgba(245,166,35,0.1)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700 }}>Men's Team</div>
          </div>
        </div>
      </div>

      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '28px', textAlign: 'center' }}>👨‍🏫 Coaching Staff</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', borderTop: '4px solid var(--gold)' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>👨‍🎓</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Head Coach - Men's Team</div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>International Coaching Experience</div>
          <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase' }}>20+ Years in Football</div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', borderTop: '4px solid var(--gold)' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>👩‍🎓</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Head Coach - Women's Team</div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Former Professional Player</div>
          <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase' }}>15+ Years Experience</div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', borderTop: '4px solid var(--gold)' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏋️</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Fitness & Sports Science</div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Certified Strength Coach</div>
          <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase' }}>Specialized Training</div>
        </div>
      </div>

      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '28px', textAlign: 'center' }}>👨‍💼 Management</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', borderLeft: '4px solid var(--gold)' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ fontSize: '48px' }}>👔</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Club Director</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Strategic Leadership & Administration</div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700 }}>Overseeing Club Operations</div>
            </div>
          </div>
        </div>
        <div style={{ background: 'var(--white)', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(10,27,61,0.06)', borderLeft: '4px solid var(--gold)' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ fontSize: '48px' }}>📊</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginBottom: '4px' }}>Football Operations Manager</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Match Management & Team Coordination</div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 700 }}>Day-to-Day Club Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKSCPage;