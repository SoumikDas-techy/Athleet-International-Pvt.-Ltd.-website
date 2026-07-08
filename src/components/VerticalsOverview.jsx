import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalsOverview.css';

const VerticalsOverview = () => {
  const verticals = [
    {
      id: 'uksc',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
      tag: "Men's & Women's",
      title: 'United Kolkata Sports Club',
      desc: 'A professionally managed football club established in 2024, championing both men\'s and women\'s football with competitive achievements across multiple divisions.',
      route: '/uksc',
      linkText: 'Explore UKSC',
    },
    {
      id: 'academy',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
      tag: 'Youth Development',
      title: 'UKSC Academy',
      desc: 'A high-performance, tech-enabled academy nurturing aspiring athletes aged 4–18 across multiple sports disciplines with world-class coaching.',
      route: '/academy',
      linkText: 'Explore Academy',
    },
    {
      id: 'ajsdp',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      tag: 'School Program',
      title: 'Athleet Jr Sports Development',
      desc: 'A holistic framework transforming school sports into a measurable, system-led program that improves student health and identifies talent.',
      route: '/ajsdp',
      linkText: 'Explore AJSDP',
    },
    {
      id: 'mcfs',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80',
      tag: 'Global Partnership',
      title: 'Techno India Manchester City Football School',
      desc: 'A premium football school bringing Manchester City\'s world-class methodology and licensed coaches to India\'s youth.',
      route: '/mcfs',
      linkText: 'Explore TIMCFS',
    },
  ];

  return (
    <section className="verticals-section">
      <div className="section-header">
        <div className="section-tag">Our Verticals</div>
        <h2 className="section-title">What We Build</h2>
        <p className="section-desc">
          Four powerful verticals forming one integrated sports development ecosystem.
        </p>
      </div>
      <div className="verticals-grid">
        {verticals.map((vertical) => (
          <Link to={vertical.route} key={vertical.id} className="vertical-card">
            <div
              className="vertical-card-bg"
              style={{ backgroundImage: `url('${vertical.image}')` }}
            ></div>
            <div className="vertical-card-overlay"></div>
            <div className="vertical-card-content">
              <span className="vertical-card-tag">{vertical.tag}</span>
              <h3 className="vertical-card-title">{vertical.title}</h3>
              <p className="vertical-card-desc">{vertical.desc}</p>
              <span className="vertical-card-link">
                {vertical.linkText}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VerticalsOverview;
