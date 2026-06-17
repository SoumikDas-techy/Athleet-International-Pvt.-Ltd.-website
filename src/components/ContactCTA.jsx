import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <div className="section-tag">Let's Build Together</div>
        <h2 className="cta-title">
          Building An <span className="cta-accent">Integrated</span>
          <br />
          Sports Development Ecosystem
        </h2>
        <p className="cta-subtitle">
          Empowering Youth &nbsp;•&nbsp; Enhancing Communities &nbsp;•&nbsp; Elevating India
        </p>
        <div className="cta-contact-grid">
          <div className="contact-item">
            <div className="contact-icon"><Mail size={28} strokeWidth={1.8} /></div>
            <div className="contact-label">Email Us</div>
            <div className="contact-value">Info@athleetinternationalsports.com</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><Phone size={28} strokeWidth={1.8} /></div>
            <div className="contact-label">Call Us</div>
            <div className="contact-value">+91 70448 62111</div>
          </div>
        </div>
        <div className="cta-actions">
          <a
            href="mailto:Info@athleetinternationalsports.com"
            className="btn-primary"
            style={{ fontSize: '15px', padding: '16px 40px' }}
          >
            Get In Touch Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;