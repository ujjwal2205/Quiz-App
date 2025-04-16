import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="foot" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">QUIZ APP</h3>
          <p className="footer-description">
            Test your knowledge with our interactive quizzes on various topics.
            Learn and challenge yourself.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Quizzes</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Contact</h4>
          <ul className="footer-contact">
            <li><i className="icon email"></i>@quizapp.com</li>
            <li><i className="icon phone"></i>(123) 456-7890</li>
            <li><i className="icon location"></i>123 Quiz Street, Knowledge City</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <div className="social-icons">
          <ul>
            <li aria-label="Facebook"><i className="social-icon facebook"></i></li>
            <li aria-label="Twitter"><i className="social-icon twitter"></i></li>
            <li aria-label="Instagram"><i className="social-icon instagram"></i></li>
            <li aria-label="LinkedIn"><i className="social-icon linkedin"></i></li>
          </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Quiz App. All rights reserved.</p>
        <div className="footer-bottom-links">
          <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;