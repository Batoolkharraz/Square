import React from 'react';
import './css/Protfolio_Style.css'; // Ensure the style is imported if needed

const Details = ({ projectTitle, closeOverlay }) => {
  // Dynamically require images based on projectTitle
  const importImages = (projectTitle) => {
    try {
      // Array to store the imported images
      const images = [];
      // Import multiple images
      const img1 = require(`./images/${projectTitle}/img1.jpg`);
      const img2 = require(`./images/${projectTitle}/img2.jpg`);
      const img3 = require(`./images/${projectTitle}/img3.jpg`);
      const img4 = require(`./images/${projectTitle}/img4.jpg`);
      const img5 = require(`./images/${projectTitle}/img5.jpg`);
      // const img6 = require(`./images/${projectTitle}/img6.jpg`);
      // const img7 = require(`./images/${projectTitle}/img7.jpg`);
      // const img8 = require(`./images/${projectTitle}/img8.jpg`);
      // const img9 = require(`./images/${projectTitle}/img9.jpg`);
      // const img10 = require(`./images/${projectTitle}/img10.jpg`);

      // Push imported images to the array
      images.push(img1, img2, img3, img4, img5);

      return images;
    } catch (error) {
      console.error('Error importing images:', error);
      return [];
    }
  };

  const images = importImages(projectTitle);

  // Function to render the slider
  const renderSlider = () => {
    return (
      <div className="project-slider">
        <div id="carouselProject" className="carousel slide">
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselProject"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselProject" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselProject" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="over active">
      <div className="over-content">
        <button className="close-button btn btn-outline-secondary" onClick={closeOverlay}>
          &times; {/* Close button (X) */}
        </button>
        <h2>{projectTitle}</h2> {/* Displaying the passed project title */}

        {/* Carousel for images */}
        {images.length > 0 ? renderSlider() : <p>No images available for this project.</p>}

        <p>This page is opened over the {projectTitle}, which is still visible with reduced opacity.</p>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={closeOverlay} // Call closeOverlay to hide the overlay
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Details;
