import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me:</p>
        <div className="footer-links">
          <a href="https://github.com/JamesWilliamParker" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jamesparker954/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
        </div>
        <p>&copy; 2024 Developer's Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
