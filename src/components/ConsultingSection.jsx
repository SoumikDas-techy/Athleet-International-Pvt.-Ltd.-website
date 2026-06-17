import React from 'react';
import { Building2, LayoutGrid, FlaskConical, Globe, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react';
import './ConsultingSection.css';

const ConsultingSection = () => {
  const services = [
    {
      icon: <Building2 size={32} strokeWidth={1.8} />,
      title: 'Infrastructure & Events',
      desc: 'Planning, designing, and managing world-class sports facilities and large-scale sporting events.',
    },
    {
      icon: <LayoutGrid size={32} strokeWidth={1.8} />,
      title: 'Program Architecture',
      desc: 'Building scalable sports development frameworks for schools, clubs, and regional federations.',
    },
    {
      icon: <FlaskConical size={32} strokeWidth={1.8} />,
      title: 'Sports Science Advisory',
      desc: 'Integrating sports medicine, performance science, and data analytics into development programs.',
    },
    {
      icon: <Globe size={32} strokeWidth={1.8} />,
      title: 'Global Exposure & Partnerships',
      desc: 'Connecting organisations with international coaches, clubs, and exchange programs.',
    },
    {
      icon: <GraduationCap size={32} strokeWidth={1.8} />,
      title: 'Coach Education',
      desc: 'Certifying and upskilling coaches using global-standard methodologies and training protocols.',
    },
    {
      icon: <Lightbulb size={32} strokeWidth={1.8} />,
      title: 'Sustainable Ecosystems',
      desc: 'Creating self-sustaining sports cultures with talent pipelines from grassroots to elite levels.',
    },
  ];

  const consultingPoints = [
    'Infrastructure Planning & Development',
    'Sports Program Design & Implementation',
    'Event Management & Tournament Organisation',
    'Technology & Data Analytics Integration',
  ];

  return (
    <section className="consulting-section" id="consulting">
      <div className="section-header">
        <div className="section-tag">Our Services</div>
        <h2 className="section-title">Sports Consulting</h2>
        <p className="section-desc">
          End-to-end consultancy for building scalable, sustainable sports ecosystems and infrastructure.
        </p>
      </div>
      <div className="consulting-grid">
        <div className="consulting-content">
          <h3 className="consulting-title">Expert Sports Advisory</h3>
          <p className="consulting-intro">
            Leveraging our integrated sports development experience to help institutions, clubs, and
            organisations build world-class sports ecosystems from the ground up.
          </p>
          <div className="consulting-points">
            {consultingPoints.map((point, index) => (
              <div key={index} className="consulting-point">
                <span className="consulting-arrow"><ArrowRight size={18} strokeWidth={2.2} /></span>
                <span className="consulting-text">{point}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="consulting-services">
          {services.map((service, index) => (
            <div key={index} className="consulting-service">
              <div className="consulting-service-icon">{service.icon}</div>
              <div className="consulting-service-title">{service.title}</div>
              <div className="consulting-service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;