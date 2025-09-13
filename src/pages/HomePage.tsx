import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { LoginModal } from '../components/LoginModal';
import { RegisterTeamModal } from '../components/RegisterTeamModal';
export const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterTeamModal, setShowRegisterTeamModal] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={() => setShowLoginModal(true)} />
      <Hero 
        onRegisterClick={() => setShowRegisterTeamModal(true)} 
        onLearnMoreClick={scrollToAbout}
      />
      <div className="about-section">
        <AboutSection />
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterTeamModal && <RegisterTeamModal onClose={() => setShowRegisterTeamModal(false)} />}
    </div>;
};