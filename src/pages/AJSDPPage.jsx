import React, { useEffect } from 'react';
import Header from '../components/Header';
import AJSDPSection from '../components/AJSDPSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

function AJSDPPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <AJSDPSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default AJSDPPage;
