import React, { useEffect } from 'react';
import '../css/profile.css';
import profilePhoto from '../images/profile-pic.png';

const Profile = () => {
  useEffect(() => {
    // Animation for skills bars on component mount
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = width;
      }, 300);
    });

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
        <div className="row">
          <div className="col-lg-4" style={{ maxHeight: "1900px" }}>
            <div className="card profile-card fade-in-section">
              <div className="card-body">
                <div className="profile-image-container">
                  <img src={profilePhoto} alt="Vijaya Bhaskar Reddy Venna" className="profile-image" />
                  <div className="profile-image-overlay">
                    <div className="social-links">
                      <a href="https://github.com/VIJAYREDDYVENNA" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vbreddyvenna/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="mailto:vbreddyvenna@gmail.com">
                        <i className="bi bi-envelope-check"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <h1 className="profile-name">VIJAYA BHASKAR REDDY VENNA</h1>
                <h3 className="profile-title">Full Stack Developer</h3>

                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>vbreddyvenna@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>+91 93473 02993</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-github"></i>
                    <span>github.com/VIJAYREDDYVENNA</span>
                  </div>
                  <div className="contact-item">
                    <i className="fab fa-linkedin"></i>
                    <span>linkedin.com/in/vbreddyvenna</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <a
                  href="/vijaya_bhaskar_reddy_venna.pdf"
                  download="vijaya_bhaskar_reddy_venna.pdf"
                  className="btn btn-download"
                >
                  <i className="fas fa-download"></i> Download Resume
                </a>

              </div>
            </div>
          </div>

          <div className="col-lg-8 cus-margin">
            <div className="card about-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                  <p>
                    Hello! I'm Vijaya Bhaskar Reddy Venna, a Full Stack Developer working at IScientific Tech Solutions Labs Pvt. Ltd.,
                    Hyderabad, where I build responsive and scalable web applications with Java, Spring Boot, React.js and MySQL.
                  </p>
                  <p>
                    My expertise spans frontend and backend development: React.js and Bootstrap for modern user interfaces, and
                    Spring Boot, Servlets, JSP and REST APIs for clean, MVC-based backend services, backed by MySQL, JDBC and Hibernate
                    for data access.
                  </p>
                  <p>
                    Recently I have built the IstlGroup CRM &amp; Business Development Dashboard, a hierarchical Building Energy Monitoring
                    System (BEMS) and a Centralized Control Monitoring System (CCMS) for street lighting, covering real-time monitoring,
                    reporting and role-based workflows.
                  </p>
                  <p>
                    I'm passionate about writing clean, maintainable code and continuously expanding my skillset through challenging
                    projects and real-world implementations.
                  </p>
                </div>
              </div>
            </div>

            <div className="card skills-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-container">

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Programming Languages: <span className="skill-value">Java, JavaScript</span></span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Frontend: <span className="skill-value">HTML, CSS, Bootstrap, ReactJS</span></span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Backend: <span className="skill-value">Servlets, JSP, Spring Boot, REST APIs</span></span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Database: <span className="skill-value">MySQL, JDBC, Hibernate</span></span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Architecture: <span className="skill-value">MVC, RESTful Services, Microservices</span></span>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Tools &amp; Others: <span className="skill-value">Eclipse, VS Code, Git, GitHub</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card education-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Education</h2>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Bachelor of Technology in Electrical and Electronics Engineering</h3>
                      <h4 className="timeline-subtitle">Audisankara College of Engineering and Technology, Gudur, India</h4>
                      <p className="timeline-date">2019 - 2023</p>
                      <p className="timeline-description">
                        Graduated with 7.86 CGPA. Focused on core electrical engineering subjects while developing
                        interest in software development and technologies.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">Intermediate (MPC)</h3>
                      <h4 className="timeline-subtitle">Sri Sai Vikas Junior College, Markapur</h4>
                      <p className="timeline-date">2017 - 2019</p>
                      <p className="timeline-description">
                        Completed intermediate education with 7.9 CGPA, specializing in Mathematics, Physics, and Chemistry.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h3 className="timeline-title">SSC (10th)</h3>
                      <h4 className="timeline-subtitle">Z P High School, Thummalacheruvu</h4>
                      <p className="timeline-date">2017</p>
                      <p className="timeline-description">
                        Completed secondary education with 8.2 CGPA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card certifications-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Certifications</h2>

                <div className="certifications-container">
                  <div className="certification-item">
                    <div className="certification-icon">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div className="certification-details">
                      <h3 className="certification-title">Java FullStack Developer Course</h3>
                      <p className="certification-issuer">Vcube Software Solutions, Hyderabad</p>
                      <p className="certification-date">09/2023 - 04/2024 | Completed with hands-on project experience</p>
                    </div>
                  </div>

                  <div className="certification-item">
                    <div className="certification-icon">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div className="certification-details">
                      <h3 className="certification-title">Web Development Course</h3>
                      <p className="certification-issuer">Hyse Software Solutions Pvt. Ltd., Chennai</p>
                      <p className="certification-date">03/2023 - 07/2023 | Certification in Comprehensive Web Development</p>
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

export default Profile;