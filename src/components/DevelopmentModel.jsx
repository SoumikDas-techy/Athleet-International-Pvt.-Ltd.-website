import React from 'react';
import './DevelopmentModel.css';

const DevelopmentModel = () => {
  const steps = [
    {
      num: '01',
      title: 'Participation',
      items: ['School Programs', 'PE & Sports Integration', 'Community Engagement', 'Inclusive & Fun'],
    },
    {
      num: '02',
      title: 'Talent ID',
      items: [
        'Inter-School Competitions',
        'Scouting & Talent Hunts',
        'Assessment & Evaluation',
        'Talent Tracking',
      ],
    },
    {
      num: '03',
      title: 'Development',
      items: ['AJSDP & Academy', 'Technical Training', 'Physical Conditioning', 'Mental & Character'],
    },
    {
      num: '04',
      title: 'Consulting',
      items: [
        'Future-Ready Infrastructure',
        'Sustainable Sports Culture',
        'Elite Talent Development',
        'Scalable Ecosystems',
      ],
    },
    {
      num: '05',
      title: 'International',
      items: [
        'Manchester City Schools',
        'Global Methodology',
        'Coach Education',
        'International Tournaments',
      ],
    },
    {
      num: '06',
      title: 'Careers',
      items: [
        'Professional Football',
        'University Opportunities',
        'Scholarships',
        'Higher Education',
      ],
    },
  ];

  const bottomCards = [
    { icon: '⭐', title: 'Quality Coaching' },
    { icon: '🔬', title: 'Sports Science & Medicine' },
    { icon: '💻', title: 'Data & Technology' },
    { icon: '🏟️', title: 'Infrastructure & Events' },
    { icon: '📚', title: 'Education & Life Skills' },
  ];

  return (
    <section className="model-section">
      <div className="section-header">
        <div className="section-tag">Our Approach</div>
        <h2 className="section-title light">Integrated Sports Development Model</h2>
        <p className="section-desc light">
          A 6-stage system connecting participation to professional pathways.
        </p>
      </div>
      <div className="model-steps">
        {steps.map((step, index) => (
          <div key={index} className="model-step">
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <ul className="step-list">
              {step.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="model-bottom">
        {bottomCards.map((card, index) => (
          <div key={index} className="model-bottom-card">
            <div className="model-bottom-card-title">{card.icon} {card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentModel;
