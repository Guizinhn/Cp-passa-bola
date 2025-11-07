import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { LoginModal } from '../components/LoginModal';
import { RegisterTeamModal } from '../components/RegisterTeamModal';
export const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterTeamModal, setShowRegisterTeamModal] = useState(false);

  /**
   * Manipulação de DOM - Scroll suave para seção
   * Demonstra revisão do DOM (requisito Web Development)
   */
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      // Manipulação controlada do DOM via React
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  /**
   * Manipulação de eventos - Abrir modal de login
   */
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  /**
   * Manipulação de eventos - Abrir modal de registro
   */
  const handleRegisterClick = () => {
    setShowRegisterTeamModal(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Header onLoginClick={handleLoginClick} />
      <Hero 
        onRegisterClick={handleRegisterClick} 
        onLearnMoreClick={scrollToAbout}
      />
      <section className="about-section" aria-label="Sobre o projeto">
        <AboutSection />
      </section>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterTeamModal && <RegisterTeamModal onClose={() => setShowRegisterTeamModal(false)} />}
    </main>
  );
};