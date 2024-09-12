import React from 'react';
import '../assets/css/portfolio.css';
const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div>
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={deployedLink}>View Project</a>
      <a href={repoLink}>View Repository</a>
    </div>
  );
};

export default Project;
