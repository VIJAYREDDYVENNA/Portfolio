import React, { useEffect } from 'react';
import '../css/profile.css';
import profilePhoto from '../images/profile-photo.jpg'; // Make sure to add your photo to this path

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
                <h3 className="profile-title">Software Engineer | Fullstack Developer</h3>

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
                    <span>www.linkedin.com/in/vijaya-bhaskar-reddy-venna-41025a234/</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>

                <a
                  href="/Portfolio/vijaya_bhaskar_reddy_venna.pdf"
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
                    Hello! I'm Vijaya Bhaskar Reddy Venna, a dedicated Software Engineer specializing in Full Stack Web Development. 
                    I currently work at IScientific Techsolutions Labs Pvt. Ltd., where I build robust and responsive web applications 
                    using modern technologies.
                  </p>
                  <p>
                   I have hands-on experience in developing full-stack applications using Java, PHP, JavaScript, React.js, HTML, CSS, 
                   Bootstrap, and MySQL. My expertise spans both frontend and backend development, with strong skills in frameworks 
                   like Spring Boot, and working knowledge of REST APIs, JDBC, Hibernate, and MVC architecture.
                  </p>
                  <p>
                    I've successfully contributed to multiple real-time control and monitoring systems, including the Live Motor Control 
                    System for Secunderabad Railway Station, the Sesola Energy website, and a Centralized Control Monitoring System (CCMS). 
                    My work also includes integrating MQTT protocol for real-time data communication and using tools like Git, GitHub, Eclipse, 
                    and VS Code for version control and development.
                  </p>
                  <p>
                    I'm passionate about writing clean, maintainable code and continuously expanding my skillset through challenging projects and real-world implementations.
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
                      <span className="skill-name">HTML5/CSS/Bootstrap</span>
                      <span className="skill-percentage">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="95%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">JavaScript/ReactJS</span>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Core Java/Spring Boot</span>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="80%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">MySQL</span>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="85%"></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">PHP/REST APIs</span>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" data-width="75%"></div>
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
                      <h3 className="timeline-title">B.Tech in Electrical and Electronics Engineering</h3>
                      <h4 className="timeline-subtitle">Audisankara College of Engineering and Technology, Gudur</h4>
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
                    {/* <div className="certification-item">
                      <div className="certification-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <div className="certification-details">
                        <h3 className="certification-title">Java, HTML, CSS, Bootstrap, JavaScript, MySQL, ReactJs</h3>
                        <p className="certification-issuer">V CUBE Software Solutions</p>
                        <p className="certification-date">Training Certificate</p>
                      </div>
                    </div> */}

                  <div className="certification-item">
                    <div className="certification-icon">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <div className="certification-details">
                      <h3 className="certification-title">Web Development</h3>
                      <p className="certification-issuer">Hyse Software Solutions Private Limited</p>
                      <p className="certification-date">Course Completion Certificate</p>
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