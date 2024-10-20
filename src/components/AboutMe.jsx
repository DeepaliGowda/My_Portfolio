// src/components/About.js
import React from 'react';
import '../styles/AboutMe.css';

const About = () => {
  return (
    <section id="aboutme" className="about">
      <div className="about-content">
        <h1 className='heading'>About Me</h1>
        <div className="dashed-line"></div>
        <p>
        I’m Deepali, an aspiring Full Stack Developer with a recent MCA degree and a passion for turning ideas into useful web applications. With a solid grasp of both front-end and back-end technologies, I enjoy creating solutions that are efficient, user-friendly, and adaptable. I’m always eager to learn new things, take on challenges, and grow my skills. <br />
        I’m looking forward to being part of a team where I can contribute, collaborate on exciting projects, and continue developing as a developer.Eager to join a forward-thinking team, I aim to contribute fresh perspectives, collaborate on exciting projects, and grow in an environment where creativity meets technology.
        </p>
        <div className="dashed-line"></div>
        <h2 className='heading'>Personal Details</h2>
        <p>Name: Deepali M V</p>
        <p>Date of Birth: June 07 2001</p>
        <p>Age: 23</p>
        <p>Address: Mysore,Karnataka</p>
        <p>Contact Number: 9141096975</p>
      </div>
      <div className="about-image">
        {/* Add an animated image here */}
        <img src="/rocket-3972_256.gif" alt="Technology Animation" />
      </div>
    </section>
  );
};

export default About;
