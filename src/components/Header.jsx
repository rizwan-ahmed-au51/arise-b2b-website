import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Arise Logo" className="logo-img" />
          <h2>Arise</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <a href="#login" className="btn btn-secondary">Login</a>
          <a href="#signup" className="btn btn-primary">Get Started</a>
        </div>
        <button className="mobile-menu-toggle" onClick={() => {}}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
