import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skill-card front-end">
          <h2>Front-End Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-card back-end">
          <h2>Back-End Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
