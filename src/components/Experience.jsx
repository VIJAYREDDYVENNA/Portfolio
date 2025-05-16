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
                      <p className="timeline-date">July 2023 - Present</p>
                      <p className="timeline-description">
                        Working as a Software Engineer with a focus on Full Stack Development, continuously learning and applying new skills in everyday professional work.
                      </p>

                      <div className="project-description">
                     <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Hands-on experience in full-stack development using Java, PHP, JavaScript, React.js, HTML,CSS, and Bootstrap.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Built responsive web interfaces and dynamic UIs using React.js and Bootstrap for modern web applications.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Developed backend services using Java (Servlets, JSP, Spring Boot, REST APIs) and PHP,following MVC architecture</span>
                        </li>

                           <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Worked with MySQL, JDBC, and Hibernate for efficient data storage and retrieval.</span>
                        </li>
                           <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Integrated real-time data communication using the MQTT protocol for control and monitoring applications.</span>
                        </li>
                           <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Proficient with tools like Eclipse, VS Code, Git, and GitHub for development and version control.</span>
                        </li>
                      </ul>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="card projects-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Key Projects</h2>

                <div className="project-container">
                  <div className="project-item">
                    <h3 className="project-title">Centralized Control Monitoring System (CCMS)</h3>
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
                          <span>Successfully deployed at <span> <a href="https://sesolaenergy.com/" target="_blank" rel="noopener noreferrer">https://sesolaenergy.com</a></span></span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="project-item">
                    <h3 className="project-title">Real-Time Energy Monitoring System </h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">HTML</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">Bootstrap</span>
                      <span className="tech-badge">ReactJS</span>
                      <span className="tech-badge">Java</span>
                      <span className="tech-badge">MySQL</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Developed a Real-Time Energy Monitoring System as a web application to monitor voltage, current, and power usage using an interactive dashboard. Implemented real-time data updates and system control features with a focus on performance and usability.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Built a real-time monitoring dashboard using React.js and Bootstrap</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Implemented backend services in PHP and Java for processing sensor data</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Integrated MQTT protocol for live energy data and system status tracking</span>
                        </li>
                      </ul>
                    </div>
                  </div>


                  <div className="project-item">
                    <h3 className="project-title">Live Motor Control and Monitoring System</h3>
                    <div className="project-tech-stack">
                      <span className="tech-badge">HTML</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">Bootstrap</span>
                      <span className="tech-badge">ReactJS</span>
                      <span className="tech-badge">Java</span>
                      <span className="tech-badge">MySQL</span>
                    </div>
                    <div className="project-description">
                      <p>
                        Developed a centralized motor control and monitoring system for Secunderabad Railway Station with a real-time dashboard to display motor status, runtime, and flow rate. Integrated remote control functionality for secure start/stop operations and real-time sensor communication.
                      </p>
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Created a real-time motor monitoring dashboard using React.js and Bootstrap</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Implemented secure remote control features for start/stop operations</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Used MQTT protocol for live sensor data integration</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Stored and managed motor data using MySQL</span>
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div className="project-item">
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
                  </div>
                  
                </div>
              </div>
            </div> */}

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