import React from 'react';
import { FaLanguage, FaCheckCircle } from 'react-icons/fa';

const Languages = () => {
  const languages = [
    {
      name: 'English',
      level: 'Fluent (C2)',
      description: 'Professional proficiency in technical communication, documentation, and international collaboration',
      proficiency: 100
    },
    {
      name: 'Turkish',
      level: 'Native Speaker',
      description: 'Full professional proficiency',
      proficiency: 100
    }
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaLanguage />
        Languages
      </h2>
      
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-item">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <div>
                <div className="language-name">{lang.name}</div>
                <div className="language-level">
                  <FaCheckCircle style={{ color: '#10b981', marginRight: '5px' }} />
                  {lang.level}
                </div>
              </div>
              <div className="badge-custom" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                {lang.proficiency}%
              </div>
            </div>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: 0 }}>
              {lang.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)', borderRadius: '15px', border: '2px dashed #e2e8f0' }}>
        <h4 style={{ color: '#1e293b', marginBottom: '15px' }}>Additional Information</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="skill-tag" style={{ width: '100%', padding: '12px' }}>
              <strong>Availability:</strong> Immediate start
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="skill-tag" style={{ width: '100%', padding: '12px' }}>
              <strong>Work Authorization:</strong> Eligible to work in the UK
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="skill-tag" style={{ width: '100%', padding: '12px' }}>
              <strong>Location:</strong> London, UK (Remote/Hybrid/On-site)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;