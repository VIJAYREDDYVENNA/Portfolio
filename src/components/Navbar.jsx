import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="logo-text">VBR</span>
        </Link>
        
        <button
          className={`navbar-toggler ${expanded ? '' : 'collapsed'}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/profile') ? 'active' : ''}`} 
                to="/profile"
                onClick={handleLinkClick}
              >
                Profile
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/experience') ? 'active' : ''}`} 
                to="/experience"
                onClick={handleLinkClick}
              >
                Experience
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
                to="/projects"
                onClick={handleLinkClick}
              >
                Projects
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
                <span className="nav-indicator"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;