import React from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Globe } from 'lucide-react';
import './SkillsSection.css';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Sketch', level: 80 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'cloud',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Terraform', level: 65 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'mobile',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 60 },
        { name: 'Android', level: 65 },
        { name: 'Expo', level: 80 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'webtech',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Webpack', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className={`skill-icon ${category.color}`}>
                  <category.icon className="icon" />
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-bar-container">
                    <div className="flex justify-between">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className={`skill-fill ${category.color}`} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h3>Additional Technologies</h3>
          <div className="tech-list">
            {[
              'Git', 'GitHub', 'GitLab', 'Jira', 'Slack', 'Notion',
              'REST APIs', 'Microservices', 'Agile', 'Scrum', 'TDD',
              'Jest', 'Cypress', 'Storybook', 'Redis', 'ElasticSearch'
            ].map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
