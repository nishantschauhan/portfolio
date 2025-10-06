
import React from "react";
import "./HeroSection.css";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

export default function HeroSection({ onScrollDown }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Profile Image */}
        <div className="profile-image">
          <div className="image-glow"></div> 
          <img
            src="./assests/nishant.jpeg"
            alt="Nishant"
            className="profile-pic"
          />
        </div>

        {/* Name and Title */}
        <div className="hero-text">
          <h1 className="hero-name">Nishant Singh </h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-description">
            Crafting beautiful, functional digital experiences with modern
            technologies. Passionate about clean code, intuitive design, and
            innovative solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="download-btn">
            <Download className="icon" />
            Download Resume
          </button>
          <button className="work-btn" onClick={onScrollDown}>
            View My Work
            <ArrowDown className="icon" />
          </button>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/nishantschauhan" className="social-icon">
            <Github />
          </a>
          <a href="www.linkedin.com/in/nschauhan" className="social-icon">
            <Linkedin />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <button onClick={onScrollDown} className="scroll-btn">
          <ArrowDown />
        </button>
      </div>
    </section>
  );
}
