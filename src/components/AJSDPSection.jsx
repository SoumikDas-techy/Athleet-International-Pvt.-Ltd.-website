import React from 'react';
import { Zap, StretchHorizontal, HeartPulse, Dumbbell, Scale, Smartphone, Check } from 'lucide-react';
import './AJSDPSection.css';

const AJSDPSection = () => {
  const fitnessParams = [
    { icon: <Zap size={28} strokeWidth={1.8} />, label: 'Speed & Agility' },
    { icon: <StretchHorizontal size={28} strokeWidth={1.8} />, label: 'Flexibility & Mobility' },
    { icon: <HeartPulse size={28} strokeWidth={1.8} />, label: 'Cardiovascular Endurance' },
    { icon: <Dumbbell size={28} strokeWidth={1.8} />, label: 'Muscular Strength' },
    { icon: <Scale size={28} strokeWidth={1.8} />, label: 'Coordination & Balance' },
    { icon: <Smartphone size={28} strokeWidth={1.8} />, label: 'Digital Tracking App', special: true },
  ];

  const appFeatures = [
    'Attendance Tracking',
    'Fitness Report Card',
    'Parent Notifications',
    'Coach Dashboards',
  ];

  const benefits = [
    'Institutional sports development framework across schools',
    'Structured physical literacy program with age-specific curriculum',
    'Professional standards in school sports delivery with data tracking',
    'Talent-to-Academy pipeline creating elite pathways',
  ];

  return (
    <section className="ajsdp-section" id="ajsdp">
      <div className="section-header">
        <div className="section-tag">Vertical 02</div>
        <h2 className="section-title">Athleet Jr Sports Development Program</h2>
        <p className="section-desc">
          Transforming school sports into a measurable, system-led program that develops student fitness,
          identifies talent, and creates long-term institutional value.
        </p>
      </div>
      <div className="ajsdp-grid">
        <div className="ajsdp-visual">
          <div className="ajsdp-visual-title">Core Fitness Assessment</div>
          <div className="ajsdp-visual-sub">Students evaluated across 5 key physical parameters</div>
          <div className="fitness-params">
            {fitnessParams.map((param, index) => (
              <div
                key={index}
                className={`fitness-param ${param.special ? 'special' : ''}`}
              >
                <div className="fitness-param-icon">{param.icon}</div>
                <div className="fitness-param-label">{param.label}</div>
              </div>
            ))}
          </div>
          <div className="app-features-section">
            <div className="app-features-label">App Features</div>
            <div className="app-features-tags">
              {appFeatures.map((feature, index) => (
                <span key={index} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="ajsdp-intro">
            AJSDP is a holistic development approach aimed to transform school sports into a measurable,
            system-led program that improves student health, identifies talent, engages parents, and
            creates long-term institutional value.
          </p>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-check"><Check size={16} strokeWidth={3} /></span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-card-for">For Schools</div>
              <h4>Institutional Value</h4>
              <ul className="value-list">
                <li>Premium Positioning</li>
                <li>Data-Driven Student Reporting</li>
                <li>Evidence-based PE improvement</li>
                <li>New Revenue Stream</li>
              </ul>
            </div>
            <div className="value-card students-card">
              <div className="value-card-for students-for">For Students</div>
              <h4>Personal Growth</h4>
              <ul className="value-list">
                <li>Health Assessments & Insights</li>
                <li>Fitness Report Card</li>
                <li>Personalised Attention</li>
                <li>Holistic Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AJSDPSection;