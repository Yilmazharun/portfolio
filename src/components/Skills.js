import React from 'react';
import { FaCogs, FaCode, FaServer, FaTools, FaCloud, FaPaintBrush, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      category: 'Frontend Technologies',
      skills: [
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'SASS/SCSS',
        'Responsive Design',
        'WebPack'
      ]
    },
    {
      icon: <FaServer />,
      category: 'Backend & APIs',
      skills: [
        'Python',
        'Django',
        'Django REST Framework',
        'REST APIs',
        'Node.js (basic)',
        'MongoDB',
        'SQL'
      ]
    },
    {
      icon: <FaTools />,
      category: 'Development Tools',
      skills: [
        'Git/GitHub',
        'VS Code',
        'npm/yarn',
        'Chrome DevTools',
        'Jira',
        'Webpack',
        'GitHub Actions'
      ]
    },
    {
      icon: <FaCloud />,
      category: 'Cloud & DevOps',
      skills: [
        'Docker',
        'AWS (EC2, S3, ECS)',
        'CI/CD pipelines',
        'GitHub Actions',
        'Salesforce basics'
      ]
    },
    {
      icon: <FaPaintBrush />,
      category: 'Design & UX',
      skills: [
        'Figma',
        'Adobe Photoshop',
        'UI/UX Principles',
        'Mobile-First Design',
        'Accessibility (WCAG)'
      ]
    },
    {
      icon: <FaBrain />,
      category: 'AI & Modern Tools',
      skills: [
        'AI Literacy',
        'Prompt Engineering',
        'ChatGPT',
        'Generative AI tools',
        'AI-assisted development'
      ]
    },
    {
      icon: <FaCogs />,
      category: 'Methodologies',
      skills: [
        'Agile/Scrum',
        'SDLC',
        'Version Control',
        'Code Review',
        'Component-Based Architecture'
      ]
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaCogs />
        Technical Skills
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>
              {category.icon}
              {category.category}
            </h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;