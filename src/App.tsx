import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideosSection from './components/VideosSection';
import Footer from './components/Footer';
import ConferenceHighlights from './components/ConferenceHighlights';
import PSASection from './components/PSASection';
import OpportunitiesAndRegistration from './components/OpportunitiesAndRegistration';
import StudentEnrollmentForm from './components/StudentEnrollmentForm';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <About />
      <ConferenceHighlights />
      <PSASection />
      <OpportunitiesAndRegistration />
      <VideosSection />
      <StudentEnrollmentForm />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;