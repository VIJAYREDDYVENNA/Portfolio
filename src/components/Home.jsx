import React, { useEffect, useState } from 'react';
import '../css/home.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to trigger the animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="div-background-image">
      <div className={`content-container ${isVisible ? 'fade-in' : ''}`}>
        <div className="name-styling">
          <h1 className="name-text">Hello There, I'm 
            <span className="highlight"> Vijaya Bhaskar Reddy Venna</span>
          </h1>
          
          <div className="title-container">
            <div className="title-wrapper">
              <h2 className="title-text typing-effect">
                Software Engineer | Fullstack Developer
              </h2>
            </div>
            
            <div className="social-icons">
              <a href="https://github.com/VIJAYREDDYVENNA" className="social-icon" title="GitHub"  target="_blank"  rel="noopener noreferrer">
                  <i class="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vbreddyvenna/" className="social-icon" title="LinkedIn" target="_blank"  rel="noopener noreferrer">
                  <i class="bi bi-linkedin"></i>
              </a>
              <a href="mailto:vbreddyvenna@gmail.com" className="social-icon" title="Email" target="_blank"  rel="noopener noreferrer">
                  <i class="bi bi-envelope-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}