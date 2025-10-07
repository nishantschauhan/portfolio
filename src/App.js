import React, { useState } from 'react'; 
import './App.css';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';

function App() {
  const [currentSection] = useState('home'); // now works

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar currentSection={currentSection} onNavigate={scrollToSection} />
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </header>
    </div>
  );
}

export default App;
