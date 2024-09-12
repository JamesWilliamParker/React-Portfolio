import React from 'react';
import '../assets/css/portfolio.css';
import projectImage from '../assets/images/1662_original.jpg'; // Import the image

const projects = [
  {
    title: 'Project One',
    image: projectImage, // Use the imported image variable
    deployedLink: 'https://example.com',
    repoLink: 'https://github.com/username/project1'
  },
  // Add more project objects here if needed
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="project-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.image} alt={project.title} />
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links">
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
