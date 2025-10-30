import React from 'react';
import { FaUser, FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';

const Summary = () => {
  return (
    <section className="section-card">
      <h2 className="section-title">
        <FaUser />
        Professional Summary
      </h2>
      <p className="summary-text">
        Frontend Developer specializing in React.js and Next.js with proven ability to build responsive, 
        high-performance web applications. Completed intensive 9-month Python Developer Program at TechPro 
        Education with 500+ hours of hands-on coding, covering full-stack development including React.js, 
        Next.js, Django, and AWS deployment. Supplemented with industry-recognized Udemy certifications in 
        JavaScript, HTML/CSS, and Digital Marketing. Demonstrated success delivering user-centric solutions 
        serving 200+ users with measurable performance improvements. Strong problem-solving skills developed 
        through operational leadership, now applied to creating efficient, scalable code.
      </p>

      <div className="row mt-4">
        <div className="col-md-4 text-center mb-3">
          <div className="p-3">
            <FaCode style={{ fontSize: '2.5rem', color: '#2563eb' }} />
            <h4 className="mt-3" style={{ color: '#1e293b' }}>500+ Hours</h4>
            <p style={{ color: '#64748b' }}>Intensive Coding</p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-3">
          <div className="p-3">
            <FaRocket style={{ fontSize: '2.5rem', color: '#7c3aed' }} />
            <h4 className="mt-3" style={{ color: '#1e293b' }}>200+ Users</h4>
            <p style={{ color: '#64748b' }}>Served Successfully</p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-3">
          <div className="p-3">
            <FaLightbulb style={{ fontSize: '2.5rem', color: '#06b6d4' }} />
            <h4 className="mt-3" style={{ color: '#1e293b' }}>Full-Stack</h4>
            <p style={{ color: '#64748b' }}>Development Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;