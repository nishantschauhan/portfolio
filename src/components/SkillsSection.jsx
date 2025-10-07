import React from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';
import './SkillsSection.css';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      colorClass: 'frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      colorClass: 'backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      colorClass: 'uiux',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      colorClass: 'cloud',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Terraform', level: 65 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      colorClass: 'mobile',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 60 },
        { name: 'Android', level: 65 },
        { name: 'Expo', level: 80 },
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      colorClass: 'webtech',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Webpack', level: 75 },
      ]
    },
  ];

  const additionalTech = [
    'Git', 'GitHub', 'GitLab', 'Jira', 'Slack', 'Notion',
    'REST APIs', 'Microservices', 'Agile', 'Scrum', 'TDD',
    'Jest', 'Cypress', 'Storybook', 'Redis', 'ElasticSearch'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="header">
          <h2 className="title-gradient">Skills & Expertise</h2>
          <p className="subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card group">
                <div className="card-header">
                  <div className={`icon-box ${category.colorClass}`}>
                    <Icon className="icon" />
                  </div>
                  <h3 className="card-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div
                          className={`progress-bar-fill ${category.colorClass}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="additional-tech-section">
          <h3 className="additional-title">Additional Technologies</h3>
          <div className="additional-tech-list">
            {additionalTech.map((tech, index) => (
              <span key={index} className="additional-tech-item">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
