import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
          &copy; 2024 Harun Yilmaz. All rights reserved.
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
          Built with <FaHeart style={{ color: '#ef4444' }} /> using React.js & Bootstrap
        </p>
        
        <div className="social-links">
          <a 
            href="https://github.com/Yilmazharun" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/harunyilmaz-it" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:ylmzharun34@gmail.com" 
            className="social-link"
            aria-label="Email Contact"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-4" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
          <p>Frontend Developer | React.js Specialist | London, UK</p>
          <p>Available for full-time positions | Immediate start</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;