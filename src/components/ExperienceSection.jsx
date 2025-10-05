
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Robert Bosch",
      location: "Stuttgart, Germany",
      period: "2024 - 2025",
      description:
        "Experienced in full-stack web development, specializing in building and optimizing user-friendly interfaces with Angular and React.",
      achievements: [
        " Ensuring cross-browser compatibility and maintaining high performance across different platforms",
        " Implementation of unit and end-to-end tests with frameworks such as Jasmine and Playwright",
        "Building and optimizing scalable back-end infrastructure, including designing scalable architecture, integrating APIs, and contributing to robust and efficient system performance.",
      ],
      logo: "/assests/images.png",
    },
    {
        title: "Assistant Management Consultant",
      company: "Aspires Services Park",
      location: "Bathinda, India",
      period: "2022 - 2023",
      description:
        "Experienced in assessing client IT requirements and optimizing hardware, software, and infrastructure deployment",
      achievements: [
        " Supported full-cycle development of custom software applications and websites adapted to client needs",
        " Supported end-to-end development of custom software applications and websites tailored to client business needs.",
        " Provided technical support for secure, scalable network systems and peripheral setups.",
      ],
      logo: "/assests/comapny.png"
    }
   
    
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Experience</h2>
          <p>A journey through innovation, growth, and technical excellence</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Card */}
              <div className="timeline-card">
                <div className="card-header">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                  <div className="card-info">
                    <h3>{exp.title}</h3>
                    <p className="company-name">{exp.company}</p>
                    <div className="card-meta">
                      <span className="period">
                        <Calendar size={16} /> {exp.period}
                      </span>
                      <span className="location">
                        <MapPin size={16} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
