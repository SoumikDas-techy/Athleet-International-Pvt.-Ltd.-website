import React, { useEffect } from 'react';
import Header from '../components/Header';
import UKSCSection from '../components/UKSCSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

function UKSCPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <UKSCSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default UKSCPage;
