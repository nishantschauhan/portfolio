import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import './ExperienceSection.css';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Robert Bosch',
      location: 'Stuttgart, Germany',
      period: '2024 - 2025',
      description: 'Developed responsive web applications using Angular & React Native. Collaborated with designers to create intuitive user interfaces.',
      achievements: [
        ' Enhanced user satisfaction by optimizing web interfaces, reducing average page load times by 25% and improving the usability scores in internal reviews.',
        ' Implementation of unit and end-to-end tests with frameworks such as Jasmine and Playwright, achieving 95% test coverage and zero major rollbacks',
        'Built reusable, modular components and redesigned backend infrastructure, supporting an increase of up to 10,000 concurrent users and raising overall system reliability. '
      ],
      logo: './assests/Bosch.png'
    },
    {
      title: 'Assistant Consultant',
      company: 'Aspires Park',
      location: 'Bathinda, India',
      period: '2022 - 2023',
      description: 'Analyzed client IT requirements and optimized hardware, software, and infrastructure deployments.',
      achievements: [
        ' Assessed client IT requirements and optimized hardware, software, and infrastructure deployment. ',
        '  Supported full-cycle development of custom software applications and websites adapted to client needs.',
        'Supported end-to-end development of custom software applications and websites tailored to client business needs.'
      ],
      logo: './assests/company.png'
    },
    
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="title-gradient">Experience</h2>
          <p className="experience-subtitle">
            A journey through innovation, growth, and technical excellence
          </p>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-line" />
          <div className="timeline-list">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-row ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                <div className="timeline-dot" />

                <div className="timeline-card-wrap">
                  <div className="timeline-card">
                    <div className="card-header">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="company-logo"
                      />
                      <div className="header-info">
                        <h3 className="job-title">{exp.title}</h3>
                        <p className="company-name">{exp.company}</p>
                        <div className="job-meta">
                          <span className="meta-group">
                            <Calendar className="meta-icon" />
                            {exp.period}
                          </span>
                          <span className="meta-group">
                            <MapPin className="meta-icon" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="job-desc">{exp.description}</p>
                    <div className="achievement-section">
                      <h4 className="achievements-title">Key Achievements:</h4>
                      <ul className="achievement-list">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="achievement-item">
                            <span className="achievement-dot" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
