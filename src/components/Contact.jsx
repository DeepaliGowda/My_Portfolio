import React from 'react';
import '../styles/Contact.css'; // Import your custom styles

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
        </div>
        <div className="contact-info">
          <a href="mailto:mvdeepali2001@gmail.com" className="contact-link">
            <i className="fas fa-envelope contact-icon"></i> mvdeepali2001@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/deepali-m-v-07-/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-linkedin contact-icon"></i>www.linkedin.com/deepali
          </a>
          <a href="https://github.com/DeepaliGowda" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-github contact-icon"></i>https://github.com/DeepaliGowda
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
