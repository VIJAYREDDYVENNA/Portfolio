import React, { useEffect } from 'react';
import '../css/projects.css';

const Projects = () => {
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
            <div className="card projects-overview-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Projects</h2>
                <p className="section-description">
                  A showcase of my technical projects, demonstrating my skills in web development,
                  IoT, and software engineering.
                </p>
              </div>
            </div>

            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Centralized Control Monitoring System (CCMS)</h3>
                  {/* <div className="project-links">
                    <a href="https://github.com/VIJAYREDDYVENNA/CCMS_1PH_3PH" className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div> */}
                </div>
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
                    Led the complete lifecycle of a complex project involving the design and implementation of the CCMS.
                    The system provides monitoring and visualization of data, showcasing expertise in web development,
                    database management, and user interface design.
                  </p>
                </div>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Real-time data monitoring with interactive dashboards</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Centralized control system with user permission management</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Data visualization with responsive charts and graphs</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Full-stack implementation with frontend and backend integration</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Remote device control capabilities and status monitoring</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Abnormal condition alerts and notification system</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Comprehensive device data display with historical records</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>User authentication and role-based access control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Building Energy Monitoring System (BEMS)</h3>
                  <div className="project-links">
                    <a href="https://github.com/VIJAYREDDYVENNA/BEMS" className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
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
                </div>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Real-time monitoring of electrical parameters (kW, kVA, current, voltage)</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Energy consumption tracking with historical data visualization</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Device status management with remote control capabilities</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Interactive dashboard with responsive design</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Abnormal power consumption alerts and notifications</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Detailed device analytics with power quality monitoring</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Energy usage optimization recommendations</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Customizable reporting and data export capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}



            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Interactive Website for Sesola Energy Company</h3>
                  <div className="project-links">
                    <a href="https://sesolaenergy.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
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
                </div>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Responsive design optimized for mobile, tablet, and desktop</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Interactive UI elements enhancing user engagement</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Dynamic content management with backend integration</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>SEO optimization for improved visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Water Management System</h3>
                  {/* <div className="project-links">
                    <a href="https://github.com/VIJAYREDDYVENNA/TanksAutomation-Kazipet" className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div> */}
                </div>
                <div className="project-tech-stack">
                  <span className="tech-badge">HTML</span>
                  <span className="tech-badge">CSS</span>
                  <span className="tech-badge">Bootstrap</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">ReactJS</span>
                  <span className="tech-badge">IoT</span>
                </div>
                <div className="project-description">
                  <p>
                    Developed a comprehensive water management system for Kazipet Railway Station to monitor and control
                    water distribution, tank levels, pump operations, and valve status. The system provides real-time
                    monitoring and control capabilities through an intuitive dashboard interface.
                  </p>
                </div>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Real-time monitoring of multiple water tanks with capacity visualization</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Pump control system with ON/OFF capabilities and status tracking</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Valve status monitoring (Open/Closed) with remote control functionality</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Water flow rate measurement and consumption tracking</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Tank filling status indicators with automated alerts</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Electrical parameter monitoring for pumps (voltage, current, power)</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Historical data reporting with filtering and search capabilities</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>Priority-based pump and tank operation management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Live Motor Control and Monitoring System </h3>
                  {/* <div className="project-links">
                    <a href="https://github.com/VIJAYREDDYVENNA/TanksAutomation-Kazipet" className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div> */}
                </div>
                <div className="project-tech-stack">
                  <span className="tech-badge">HTML</span>
                  <span className="tech-badge">CSS</span>
                  <span className="tech-badge">Bootstrap</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">ReactJS</span>
                  <span className="tech-badge">IoT</span>
                </div>
                <div className="project-description">
                  <p>
                    Built a web-based system to monitor and control motors and valves in real-time at Secunderabad
                    Railway Station, with live data, alerts, and historical reports.
                  </p>
                </div>
                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Centralized monitoring and control of motor operations and water flow at Secunderabad Railway Station
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Displays active operating mode (Automatic or Manual) for each motor to enable real-time decision-making
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Monitors inlet and outlet pressures of motors to ensure efficient water flow management
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Live status updates and control of valves directing water to specific platforms
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Tracks key electrical parameters such as voltage, current, and power for operational diagnostics
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Alert system for fault detection and performance monitoring
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className='project-description'>
                        Historical data reporting features for performance review and fault analysis
                      </span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;