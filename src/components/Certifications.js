import React from 'react';
import { FaCertificate, FaStar, FaClock } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'The Complete JavaScript Course: From Zero to Expert!',
      instructor: 'Jonas Schmedtmann',
      platform: 'Udemy',
      completed: 'May 2023',
      duration: '69 hours',
      rating: 4.7,
      description: 'Comprehensive JavaScript mastery including ES6+, async/await, OOP, functional programming, and modern best practices'
    },
    {
      title: 'The Web Developer Bootcamp 2022',
      instructor: 'Colt Steele',
      platform: 'Udemy',
      completed: 'May 2022',
      duration: '64 hours',
      rating: 4.7,
      description: 'Full-stack web development covering HTML, CSS, JavaScript, Node.js, Express, MongoDB, and responsive design'
    },
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      instructor: 'Jonas Schmedtmann',
      platform: 'Udemy',
      completed: 'December 2022',
      duration: '37.5 hours',
      rating: 4.8,
      description: 'Modern HTML5 and CSS3 techniques, Flexbox, CSS Grid, responsive design principles, and web design best practices'
    },
    {
      title: 'Python ile Algoritma: Açıklamalı 50 Python Algoritma Çözümü',
      instructor: 'Turkish language course',
      platform: 'Udemy',
      completed: 'October 2024',
      duration: '6.5 hours',
      rating: 4.6,
      description: '50 Python algorithm solutions with detailed explanations covering data structures, problem-solving, and optimization'
    },
    {
      title: 'The Complete Digital Marketing Course - 12 Courses in 1',
      instructor: 'Rob Percival, Daragh Walsh',
      platform: 'Udemy',
      completed: 'August 2021',
      duration: '22.5 hours',
      rating: 4.5,
      description: 'Comprehensive digital marketing including SEO, social media marketing, email marketing, and analytics'
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaCertificate />
        Professional Certifications
      </h2>

      <div className="mb-4">
        <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
          Continuously expanding technical knowledge through industry-recognized certification programs, 
          demonstrating commitment to professional development and staying current with modern technologies.
        </p>
      </div>
      
      {certifications.map((cert, index) => (
        <div key={index} className="certification-item">
          <div className="item-header">
            <div>
              <div className="item-title">{cert.title}</div>
              <div className="item-company">
                {cert.instructor} • {cert.platform}
              </div>
            </div>
            <div className="item-date">{cert.completed}</div>
          </div>
          
          <div className="d-flex gap-3 mb-3 flex-wrap">
            <div className="certification-badge">
              <FaClock /> {cert.duration}
            </div>
            <div className="certification-badge" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
              <FaStar /> {cert.rating}/5.0
            </div>
          </div>

          <p className="item-description">{cert.description}</p>
        </div>
      ))}

      <div className="mt-4 p-4" style={{ background: '#f8fafc', borderRadius: '15px', borderLeft: '5px solid #06b6d4' }}>
        <h4 style={{ color: '#1e293b', marginBottom: '10px' }}>Total Learning Investment</h4>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="metric-value" style={{ color: '#2563eb' }}>199.5</div>
            <div className="metric-label">Hours of Udemy Courses</div>
          </div>
          <div className="col-md-4">
            <div className="metric-value" style={{ color: '#7c3aed' }}>500+</div>
            <div className="metric-label">Hours in Bootcamp</div>
          </div>
          <div className="col-md-4">
            <div className="metric-value" style={{ color: '#06b6d4' }}>700+</div>
            <div className="metric-label">Total Training Hours</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;