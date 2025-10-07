
import React, { useEffect, useState } from 'react';
import { ArrowDown, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import './Portfolio.css'; 

export default function Index() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      const windowHeight = window.innerHeight;
      const currentIndex = Math.floor(window.scrollY / windowHeight);
      setCurrentSection(sections[currentIndex] || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="portfolio-container">
      {/* Black Background with Subtle Effects */}
      <div className="background-wrapper">
        <div className="background-black" />
        <div className="background-effects">
          <div className="circle circle-blue" />
          <div className="circle circle-indigo delay-1" />
          <div className="circle circle-purple delay-2" />
        </div>
      </div>

 

      <main className="main-content">
        <HeroSection onScrollDown={() => scrollToSection('experience')} />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );

 

}


