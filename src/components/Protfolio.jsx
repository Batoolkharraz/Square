import React, { Component } from 'react';
import './css/Protfolio_Style.css';
import logo_1 from './images/Hawa Shose/img1.jpg';
import logo_2 from './images/Alia Crocnet/img1.jpg';
import logo_3 from './images/Rawasi/img1.jpg';
import slider from './images/Slider.jpg';
import Details from './Details'; // Import Details component
import Project from './Projects'; // Import Project component

export default class Protfolio extends Component {
  state = {
    activeHeart: [false, false, false, false], // Track heart icons
    isOverlayOpen: false, // Manage overlay visibility
    selectedProjectTitle: '', // Store selected project title
  };

  toggleHeart = (index) => {
    const updatedHearts = [...this.state.activeHeart];
    updatedHearts[index] = !updatedHearts[index];
    this.setState({ activeHeart: updatedHearts });
  };

  openOverlay = (projectTitle) => {
    this.setState({ isOverlayOpen: true, selectedProjectTitle: projectTitle });
  };

  closeOverlay = () => {
    this.setState({ isOverlayOpen: false, selectedProjectTitle: '' });
  };

  render() {
    const { activeHeart, isOverlayOpen, selectedProjectTitle } = this.state;

    // List of projects with titles and images
    const projects = [
      { title: 'Hawa Shose', image: logo_1},
      { title: 'Alia Crocnet', image: logo_2 },
      { title: 'Rawasi', image: logo_3 },
    ];

    return (
      <div>
        
        <div className="slider">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slider} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slider} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Our Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  image={project.image}
                  isLiked={activeHeart[index]}
                  toggleHeart={() => this.toggleHeart(index)}
                  openOverlay={() => this.openOverlay(project.title)}
                />
              ))}
            </div>
          </div>
        </section>

        {isOverlayOpen && (
          <Details
            projectTitle={selectedProjectTitle} // Pass project title
            closeOverlay={this.closeOverlay} // Pass close function
          />
        )}
      </div>
    );
  }
}
