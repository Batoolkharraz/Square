import React from 'react';
import './css/Protfolio_Style.css'; // Ensure the style is imported if needed

const Project = ({ title, image, toggleHeart, isLiked, openOverlay }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <h3>{title}</h3>
        <div>
          <i
            className={`fas fa-heart ${isLiked ? 'liked' : ''}`}
            onClick={toggleHeart}
          />
          <i
            className="fas fa-chevron-down arrow-icon"
            onClick={openOverlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
