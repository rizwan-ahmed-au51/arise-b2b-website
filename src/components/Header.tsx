import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg-gradient"></div>
      <nav className="nav">
        <div className="logo">
          <h2>B2B Website</h2>
        </div>
        <a href="#signup" className="btn btn-primary">
          Get Started
        </a>
      </nav>
    </header>
  );
};

export default Header;
