import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Arise</h3>
              <p>Empowering Medical Education</p>
            </div>
            <p>Empowering tutors with cutting-edge tools to create, manage, and monetize educational content.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="footer-social">
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-cta">
          <h3>Ready to Start Teaching?</h3>
          <p>Join hundreds of successful tutors who are building their online education business with Arise.</p>
          <div className="footer-buttons">
            <a href="#signup" className="btn btn-primary">Join as Tutor</a>
            <a href="#demo" className="btn btn-secondary">Book Demo</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Arise Medical Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
