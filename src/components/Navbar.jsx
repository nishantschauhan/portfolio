import React, { useState } from "react";
import "./Navbar.css" 
import { Menu, X } from "lucide-react";


export default function Navbar({currentSection, onNavigate}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-logo">Portfolio</div>
           {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-button ${
                  currentSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

           {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`mobile-link ${
                  currentSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
        
      </div>
    </nav>
  );
}
