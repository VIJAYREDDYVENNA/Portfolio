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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;