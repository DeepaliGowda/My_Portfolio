import React from 'react';
import '../styles/ProjectCard.css'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-button">GitHub</a>
      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn liveDemo-button">Live Demo</a>
    </div>
  );
};

export default ProjectCard;
