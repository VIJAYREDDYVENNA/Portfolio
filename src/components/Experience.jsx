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
                      <h3 className="timeline-title">Software Engineer</h3>
                      <h4 className="timeline-subtitle">IScientific Tech Solutions Labs Pvt. Ltd., Hyderabad, India</h4>
                      <p className="timeline-date">May 2024 - Present</p>
                      <p className="timeline-description">
                        Working as a Software Engineer focused on full-stack development with Java, Spring Boot and React.js.
                      </p>

                      <div className="project-description">
                      <ul className="project-highlights">
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Proficient in developing responsive and interactive user interfaces using React.js and Bootstrap, delivering modern and intuitive web application experiences.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Built full-stack applications leveraging Java, JavaScript, HTML, and CSS, with a strong emphasis on performance and scalability.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Experienced in creating backend systems using Spring Boot, Servlets, JSP, and REST APIs, following clean MVC architecture design.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Efficiently handled data operations using MySQL, JDBC, and Hibernate, ensuring seamless data access and storage.</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle highlight-icon"></i>
                          <span>Well-versed in version control and development environments including Git, GitHub, Eclipse, and Visual Studio Code.</span>
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