import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="section-card header-card text-center">
      <h1 className="header-title">HARUN YILMAZ</h1>
      <h2 className="header-subtitle">Frontend Developer</h2>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:ylmzharun34@gmail.com" className="contact-link">
            ylmzharun34@gmail.com
          </a>
        </div>
        
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>07597569503</span>
        </div>
        
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>London, UK</span>
        </div>
        
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a 
            href="https://www.linkedin.com/in/harunyilmaz-it" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/harunyilmaz-it
          </a>
        </div>
        
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a 
            href="https://github.com/Yilmazharun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/Yilmazharun
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;