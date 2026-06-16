import React, { useEffect } from 'react';
import Header from '../components/Header';
import AcademySection from '../components/AcademySection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

function AcademyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <AcademySection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default AcademyPage;
