import React from 'react';
import { FaGraduationCap, FaCertificate, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaCertificate />,
      degree: 'Python Developer Program',
      institution: 'TechPro Education',
      accreditation: 'ISO 9001-2008 Certified',
      date: 'Graduated: August 2024',
      duration: '9-month intensive program (500+ hours)',
      description: 'Comprehensive full-stack development bootcamp covering: Python (129 hours), Django (87 hours), JavaScript (93 hours), React.js (60 hours), Next.js (39 hours), SQL (27 hours), MongoDB (6 hours), Bootstrap (32 hours), HTML/CSS (56 hours), Git/GitHub (9 hours), AWS & Docker (12 hours), SDLC & Agile (15 hours). Capstone project: Production-ready cinema booking platform deployed on AWS with Docker containerization.',
      highlights: [
        '500+ hours of hands-on coding',
        'Full-stack development focus',
        'AWS & Docker deployment',
        'Production-ready capstone project'
      ]
    },
    {
      icon: <FaCertificate />,
      degree: 'Artificial Intelligence Literacy and Technologies Course',
      institution: 'TechPro Education',
      date: 'Completed: May 2024',
      duration: '5-day intensive program',
      description: 'Comprehensive AI fundamentals course covering Machine Learning, Deep Learning, Natural Language Processing (NLP), Large Language Models (LLM), Generative AI, Prompt Engineering (ChatGPT, Gemini, Copilot), AI Tools (20+ tools including image/video/audio creation platforms), and ethical considerations. Learned practical applications of AI in software development and modern development workflows.',
      highlights: [
        'AI/ML fundamentals',
        'Prompt Engineering mastery',
        '20+ AI tools experience',
        'Ethical AI considerations'
      ]
    },
    {
      icon: <FaUniversity />,
      degree: "Bachelor's Degree in International Relations",
      institution: 'Karadeniz Technical University, Turkey',
      date: 'Graduated: 2019',
      description: 'Developed strong analytical thinking, research methodologies, cross-cultural communication, and project management skills. Coursework included data analysis, strategic planning, and international business relations—skills that enhance technical problem-solving and client collaboration in software development.',
      highlights: [
        'Analytical thinking',
        'Cross-cultural communication',
        'Project management',
        'Strategic planning'
      ]
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaGraduationCap />
        Education
      </h2>
      
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="item-header">
            <div>
              <div className="item-title">
                {edu.icon}
                {' '}
                {edu.degree}
              </div>
              <div className="item-company">{edu.institution}</div>
              {edu.accreditation && (
                <div className="mt-2">
                  <span className="badge-custom">{edu.accreditation}</span>
                </div>
              )}
            </div>
            <div className="item-date">{edu.date}</div>
          </div>
          
          {edu.duration && (
            <div className="cert-duration">
              <strong>Duration:</strong> {edu.duration}
            </div>
          )}

          <p className="item-description mb-3">{edu.description}</p>

          {edu.highlights && (
            <div className="row">
              {edu.highlights.map((highlight, idx) => (
                <div key={idx} className="col-md-6 mb-2">
                  <span className="skill-tag" style={{ fontSize: '0.85rem' }}>
                    ✓ {highlight}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Education;