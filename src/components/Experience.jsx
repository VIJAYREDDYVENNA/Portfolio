import React, { useEffect } from 'react';
import '../css/experience.css'; // Reusing the same styling

const Experience = () => {
  useEffect(() => {
    // Animate content sections
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('is-visible');
      }, 200 * (index + 1));
    });
  }, []);

  return (
    <div className="profile-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card professional-experience-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Professional Experience</h2>
                
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Software Engineer - Fullstack Developer</h3>
                      <h4 className="timeline-subtitle">IScientific Techsolutions Labs Pvt. Ltd.</h4>
                      <p className="timeline-date">May 2024 - Present</p>
                      <p className="timeline-description">
                        Working as a Software Engineer with a focus on Full Stack Development, building web applications 
                        and monitoring systems using various modern technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card projects-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Key Projects</h2>
                
                <div className="project-container">
                  <div className="project-item">
                    <h3 className="project-title">Centralized Control Monitoring System (CCMS)</h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">HTML</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">Bootstrap</span>
                      <span className="tech-badge">MySQL</span>
                      <span className="tech-badge">ReactJS</span>
                      <span className="tech-badge">Java</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Led the complete lifecycle of a complex project involving the design and implementation of the CCMS.
                        The system provides monitoring and visualization of data, showcasing expertise in web development,
                        database management, and user interface design.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Implemented full-stack solution for real-time data monitoring</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Designed intuitive dashboards for data visualization</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Led the development team through the complete project lifecycle</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="project-item">
                    <h3 className="project-title">Building Energy Monitoring System (BEMS)</h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">HTML</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">Bootstrap</span>
                      <span className="tech-badge">MySQL</span>
                      <span className="tech-badge">ReactJS</span>
                      <span className="tech-badge">Java</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Designed and implemented a Building Energy Monitoring System dashboard for real-time monitoring
                        and control of electrical meters with a user-friendly interface to display consumed load per device
                        and manage the status of switched devices.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Developed real-time monitoring interface for electrical parameters</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Created visualizations for tracking kW, kVA, current, and voltage</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Built device status management system with control capabilities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="project-item">
                    <h3 className="project-title">Interactive Website for Sesola Energy Company</h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">HTML</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">Bootstrap</span>
                      <span className="tech-badge">JavaScript</span>
                      <span className="tech-badge">PHP</span>
                      <span className="tech-badge">MySQL</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Designed and developed an interactive website for Sesola Energy Company with responsive and 
                        visually appealing interface to enhance user experience across devices.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Created responsive design optimized for all device types</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Integrated dynamic backend functionality with PHP and MySQL</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Successfully deployed at <span> <a href="http://test.istlabsonline.com/" target="_blank"  rel="noopener noreferrer">http://test.istlabsonline.com/</a></span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* <div className="project-item">
                    <h3 className="project-title">Temperature-Based Fan Speed Control and Monitoring System</h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">Arduino</span>
                      <span className="tech-badge">Electronics</span>
                      <span className="tech-badge">Hardware</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Designed and implemented a dynamic fan speed control system that adjusts fan speed based on 
                        real-time temperature readings to optimize energy efficiency using Arduino Uno.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Integrated LM35 temperature sensor with Arduino for real-time monitoring</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Displayed temperature and fan speed data on an LCD panel</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Implemented energy-efficient speed control algorithm</span>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            
            {/* <div className="card achievements-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Achievements</h2>
                
                <div className="achievements-container">
                  <div className="achievement-item">
                    <div className="achievement-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="achievement-details">
                      <h3 className="achievement-title">1st Position in Running Race</h3>
                      <p className="achievement-issuer">ASIT College</p>
                    </div>
                  </div>
                  
                  <div className="achievement-item">
                    <div className="achievement-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="achievement-details">
                      <h3 className="achievement-title">1st Position in Kabaddi Contest</h3>
                      <p className="achievement-issuer">Z P High School</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;