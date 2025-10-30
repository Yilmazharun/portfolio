import React from 'react';
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Operational Lead',
      company: 'MBE Worldwide, UK',
      date: 'October 2020 – Present',
      achievements: [
        'Lead cross-functional operations managing daily logistics and digital services, maintaining 98% customer satisfaction rate across 200+ B2B client accounts',
        'Developed process optimization workflows reducing order processing time by 25% through systematic analysis, automation recommendations, and streamlined procedures',
        'Create and maintain 50+ digital marketing templates using Adobe Creative Suite, ensuring brand consistency and professional quality across all client communications',
        'Self-initiated Python scripting project to automate inventory tracking and reporting, saving approximately 5 hours per week in manual data entry and reducing errors',
        'Manage technical troubleshooting for print/digital equipment and software systems, developing logical problem-solving approach transferable to debugging code',
        'Translate complex client requirements into actionable solutions, demonstrating communication and project management skills essential for development team collaboration'
      ],
      highlight: '98% Customer Satisfaction | 25% Efficiency Improvement'
    },
    {
      title: 'Junior Developer Intern',
      company: 'Centre for Turkey Studies (CEFTUS), UK',
      date: 'September 2019 – May 2020',
      technologies: 'HTML, CSS, JavaScript, WordPress, Git, Google Analytics, Responsive Design',
      achievements: [
        'Maintained and enhanced website front-end features using HTML5, CSS3, and vanilla JavaScript, ensuring cross-browser compatibility across Chrome, Firefox, Safari, and Edge',
        'Implemented responsive design patterns using CSS Flexbox and media queries, achieving 100% mobile compatibility and improving mobile traffic by 15%',
        'Optimized website performance through image compression, lazy loading, and code minification, improving Google Lighthouse score from 68 to 87',
        'Collaborated with team using Git version control and Agile methodology, participating in weekly sprints, stand-ups, and code reviews',
        'Utilized Google Analytics to track user behavior, bounce rates, and traffic sources, optimizing content strategy based on data insights',
        'Supported digital marketing campaigns through website updates and social media integration, contributing to 20% increase in event registrations'
      ],
      highlight: 'Lighthouse Score: 68 → 87 | Mobile Traffic +15%'
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaBriefcase />
        Professional Experience
      </h2>
      
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="item-header">
            <div>
              <div className="item-title">{exp.title}</div>
              <div className="item-company">{exp.company}</div>
            </div>
            <div className="item-date">{exp.date}</div>
          </div>
          
          {exp.technologies && (
            <div className="tech-badge mb-3">
              <strong>Technologies:</strong> {exp.technologies}
            </div>
          )}

          {exp.highlight && (
            <div className="mb-3">
              <span className="badge-custom">
                <FaCheckCircle /> {exp.highlight}
              </span>
            </div>
          )}
          
          <ul className="item-description">
            {exp.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;