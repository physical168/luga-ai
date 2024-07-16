import React from 'react';
import logo from '../assets/luga-logo.png';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/x.svg';
import '../index.css';

const Header = () => {
  return (
    <header className="header-bg header">
      <div className="flex items-center logo-title-container">
  <img src={logo} alt="Luga AI Logo" className="logo" />
  <span className="title">Luga AI</span>
</div>

      <nav className="nav">
        <div className="social-icon">
        <a href="https://www.linkedin.com/company/luga-ai"><img src={navIcon1} alt="" /></a>
        <a href="https://x.com/Lugaai_official"><img src={navIcon2} alt="" /></a>
        </div>
        
      </nav>
    </header>
  );
}

export default Header;
