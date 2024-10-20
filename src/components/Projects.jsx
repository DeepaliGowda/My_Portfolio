import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Project.css'; // Make sure to create this CSS file

const Projects = () => {
  const projects = [
    {
      name: "Food Receipe App",
      description: "A React-based Food Recipe application that fetches and displays recipes, including ingredients, cooking instructions, timings and servings from a third-party API",
      image: "/ProjectImage/foodImg.jpeg", 
      githubLink: "https://github.com/DeepaliGowda/FoodRecipeApp",
      liveDemo: "",
    },
    {
      name: "Task Manager",
      description: "To-Do application is a simple and efficient tool for managing daily tasks, built using React.js.It allows users to easily add tasks they need to complete, with each task displayed in a clear, organized list.",
      image: "/ProjectImage/task.jpg", 
      githubLink: "https://github.com/DeepaliGowda/TodoApplication",
      liveDemo:"https://todo-application-virid-one.vercel.app/",
    },
    {
      name: "Printify App",
      description: "Printify is a static web application built using React, featuring a beautiful and user-friendly interface. It allows users to easily create, and sell custom products online, streamlining the process for both creators and sellers.",
      image: "/ProjectImage/printify.jpeg", 
      githubLink: "https://github.com/DeepaliGowda/Printify",
      liveDemo:"https://printify-peach.vercel.app/",
    },
    {
      name: "Travel Management",
      description: "The Travel Management Website is designed to help users plan and book their travel easily. The website is developed using HTML for structure and CSS for styling, creating a visually appealing and user-friendly expirence.",
      image: "/ProjectImage/travel.webp", 
      githubLink: "https://github.com/DeepaliGowda/Travel-Management-Website",
      liveDemo:"https://travel-management-website.vercel.app/",
    },
    {
      name: "Real Estate Price Pridiction",
      description: "The Real Estate Price Prediction project built using python offers several advantages. It provides a quick and data-driven way to estimate property prices, helping buyers and sellers make informed decisions.",
      image: "/ProjectImage/realEstate.jpeg", // Replace with actual image link
      githubLink: "https://github.com/DeepaliGowda/Real_Estate_Price_prediction",
      liveDemo:"",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
