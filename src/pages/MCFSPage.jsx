import React, { useEffect } from 'react';
import Header from '../components/Header';
import MCFSSection from '../components/MCFSSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

function MCFSPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <MCFSSection />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default MCFSPage;
