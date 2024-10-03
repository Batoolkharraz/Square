import React, { Component } from 'react';
import './css/Navbar_Style.css';
import logo from './images/Square_logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();  // Use the useNavigate hook for navigation
  const [activeLink, setActiveLink] = React.useState('/');
  const [language, setLanguage] = React.useState('en');

  const handleNavClick = (path) => {
    setActiveLink(path);
    navigate(path);  // Use navigate function to navigate to the path
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (lang === 'ar') {
      window.location.href = 'index_ar.html';  // Replace this with an actual language handling if necessary
    } else {
      window.location.href = 'index.html';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleNavClick('/')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleNavClick('/about')}>
                About
              </Link >
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${activeLink === '/services' ? 'active' : ''}`} onClick={() => handleNavClick('/services')}>
                Services
              </Link >
            </li>
            <li className="nav-item">
              <Link to="/protfolio" className={`nav-link ${activeLink === '/protfolio' ? 'active' : ''}`} onClick={() => handleNavClick('/protfolio')}>
              protfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/price" className={`nav-link ${activeLink === '/price' ? 'active' : ''}`} onClick={() => handleNavClick('/price')}>
                Price
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn btn-language dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-globe" /> {language === 'en' ? 'English' : 'العربية'}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => changeLanguage('en')}>
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={() => changeLanguage('ar')}>
                      العربية
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
