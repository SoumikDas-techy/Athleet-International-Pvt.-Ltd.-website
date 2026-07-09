import React, { useEffect, useRef, useState } from 'react';
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

  const gridRef = useRef(null);
  const timers = useRef({});
  const [typedTitles, setTypedTitles] = useState(
    verticals.reduce((acc, v) => ({ ...acc, [v.id]: '' }), {})
  );
  const loopTyping = (id, fullText) => {
    let i = 0;
    let phase = 'typing'; 

    const tick = () => {
      if (phase === 'typing') {
        i += 1;
        setTypedTitles((prev) => ({ ...prev, [id]: fullText.slice(0, i) }));
        if (i >= fullText.length) {
          phase = 'holding';
          timers.current[id] = setTimeout(tick, 2500); 
          return;
        }
        timers.current[id] = setTimeout(tick, 55);
        return;
      }

      if (phase === 'holding') {
        setTypedTitles((prev) => ({ ...prev, [id]: '' }));
        phase = 'waiting';
        timers.current[id] = setTimeout(tick, 500); 
        return;
      }

      if (phase === 'waiting') {
        i = 0;
        phase = 'typing';
        timers.current[id] = setTimeout(tick, 100);
        return;
      }
    };

    tick();
  };

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.vertical-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-visible');
            const id = el.dataset.id;
            const title = el.dataset.title;
            setTimeout(() => loopTyping(id, title), 550);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      Object.values(timers.current).forEach(clearTimeout);
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
    card.style.setProperty('--glareX', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glareY', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotateX', `0deg`);
    card.style.setProperty('--rotateY', `0deg`);
  };

  return (
    <section className="verticals-section">
      <div className="section-header">
        <div className="section-tag">Our Verticals</div>
        <h2 className="section-title">What We Build</h2>
        <p className="section-desc">
          Four powerful verticals forming one integrated sports development ecosystem.
        </p>
      </div>
      <div className="verticals-grid" ref={gridRef}>
        {verticals.map((vertical, index) => (
          <Link
            to={vertical.route}
            key={vertical.id}
            data-id={vertical.id}
            data-title={vertical.title}
            className={`vertical-card zigzag-${index % 2 === 0 ? 'up' : 'down'} swipe-${
              index % 2 === 0 ? 'left' : 'right'
            }`}
            style={{ transitionDelay: `${index * 0.18}s` }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="vertical-card-bg"
              style={{ backgroundImage: `url('${vertical.image}')` }}
            ></div>
            <div className="vertical-card-overlay"></div>
            <div className="vertical-card-glare"></div>
            <div className="vertical-card-content">
              <span className="vertical-card-tag">{vertical.tag}</span>
              <h3 className="vertical-card-title">
                {typedTitles[vertical.id]}
              </h3>
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