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
                  <h3 className="project-main-title">IstlGroup CRM &amp; Business Development Dashboard</h3>
                </div>
                <p className="project-date">12/2025 - 10/2026</p>

                <div className="project-description">
                  <p>
                    A full-stack CRM application to manage leads, clients, sales, procurement, analytics and documents.
                  </p>
                </div>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Built a full-stack CRM to manage leads, clients, sales, procurement, analytics and documents using React, Spring Boot and MySQL</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Responsive React UI components (tables, grids, modals, dashboards) with advanced filtering, role-based views and reusable layouts</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">RESTful APIs in Spring Boot for business workflows including proposals, quotations, invoices, purchase orders and follow-ups</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Scalable architecture with activity tracking, audit logs, reporting and exportable Word/PDF documents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Building Energy Monitoring System (BEMS)</h3>
                </div>
                <p className="project-date">03/2025 - 09/2025</p>

                <div className="project-description">
                  <p>
                    A hierarchical Building Energy Monitoring System to track and analyze power consumption across residential and commercial buildings.
                  </p>
                </div>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Hierarchical monitoring of power consumption across residential and commercial buildings using Java (Spring Boot), React and MySQL</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Backend services calculating peak usage hours, on-time/off-time metrics, total energy consumption and efficiency indicators to support performance optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Centralized Control Monitoring System (CCMS)</h3>
                </div>
                <p className="project-date">12/2024 - 02/2025</p>

                <div className="project-description">
                  <p>
                    A Java-based Centralized Control and Monitoring System for real-time monitoring and control of street lighting infrastructure.
                  </p>
                </div>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Backend services using Spring Boot and MySQL to manage device data, operational status and control commands</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">APIs to retrieve and process live device metrics, including installation counts per location and key operating parameters</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">Data processing modules calculating uptime/downtime hours, with support for historical analysis and date-based reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card project-card fade-in-section">
              <div className="card-body">
                <div className="project-header">
                  <h3 className="project-main-title">Interactive Website for iScientific Techsolutions Labs Private Limited</h3>
                  <div className="project-links">
                    <a
                      href="https://istlenergy.com/"
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>

                <div className="project-description">
                  <p>
                    Designed and developed an interactive and responsive website for
                    iScientific Techsolutions Labs Private Limited using ReactJS, Java, and
                    MySQL. The platform provides an engaging and seamless experience across
                    all devices.
                  </p>
                </div>

                <div className="project-features">
                  <h4 className="features-title">Key Features</h4>
                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">
                        Fully responsive design optimized for all screen sizes
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">
                        Built using ReactJS for dynamic and component-based UI
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">
                        Java backend integration for secure and efficient data handling
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">
                        MySQL database for reliable data management
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle feature-icon"></i>
                      <span className="project-description">
                        Optimized for performance and SEO for improved online visibility
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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