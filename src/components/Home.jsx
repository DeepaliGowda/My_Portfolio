import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hello, I'm <span>Deepali M V</span></h1>
        <h2>Full Stack Developer</h2>
        <div className="home-buttons">
          <a href="#contact" className="btn hire-me">Contact Me</a>
          <a href="/Deepali_Resume.pdf" target='_blank' rel='noopener nreferrer' className="btn download-resume">View Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/deepali-m-v-07-/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/DeepaliGowda" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
