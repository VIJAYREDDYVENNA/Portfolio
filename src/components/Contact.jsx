import React, { useState, useEffect } from 'react';
import '../css/contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Animate content sections
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('is-visible');
      }, 200 * (index + 1));
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Initialize EmailJS with your public key
        emailjs.init("KMScag2yVBO9Zn4_J");
        
        // Send the email using EmailJS
        const result = await emailjs.send(
          'service_tg6hvcn',
          'template_fjcewdi',
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        );
        
        console.log('Email successfully sent!', result.text);
        
        // Reset form and show success message
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
        
        // Reset error status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="profile-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card contact-card fade-in-section">
              <div className="card-body">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-description">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                  I'll try my best to get back to you!
                </p>
                
                <div className="row mt-4">
                  <div className="col-md-5">
                    <div className="contact-info">
                      <div className="contact-item">
                        <div className="contact-icon mt-4">
                          <i className="fas fa-envelope m-3"></i>
                        </div>
                        <div className="contact-details">
                          <h3 className="contact-item-title">EMAIL</h3>
                          <a href="mailto:vbreddyvenna@gmail.com" className="contact-item-value text-decoration-none">vbreddyvenna@gmail.com</a>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon mt-4">
                          <i className="fas fa-phone m-3"></i>
                        </div>
                        <div className="contact-details">
                          <h3 className="contact-item-title">PHONE</h3>
                          <a href="tel:+919347302993" className="contact-item-value text-decoration-none">+91 9347302993</a>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon mt-4">
                          <i className="fas fa-map-marker-alt m-3"></i>
                        </div>
                        <div className="contact-details">
                          <h3 className="contact-item-title">LOCATION</h3>
                          <p className="contact-item-value">Hyderabad, India</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <div className="contact-icon mt-4">
                          <i className="fab fa-linkedin m-3"></i>
                        </div>
                        <div className="contact-details">
                          <h3 className="contact-item-title ">LINKEDIN</h3>
                          <a href="https://www.linkedin.com/in/vijaya-bhaskar-reddy-venna-41025a234/" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="contact-item-value text-decoration-none">Vijaya Bhaskar Reddy Venna</a>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon mt-4">
                        <i className="fab fa-github m-3"></i>
                        </div>
                        <div className="contact-details">
                          <h3 className="contact-item-title ">GITHUB</h3>
                          <a href="https://github.com/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="contact-item-value text-decoration-none">Vijaya Bhaskar Reddy Venna
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-7">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      {submitStatus === 'success' && (
                        <div className="alert alert-success">
                          <i className="fas fa-check-circle me-2"></i>
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="alert alert-danger">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          Sorry, there was an error sending your message. Please try again.
                        </div>
                      )}
                      
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                        />
                        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                        />
                        {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          placeholder="Your Message"
                        ></textarea>
                        {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                      </div>
                      
                      <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>
                    </form>
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

export default Contact;