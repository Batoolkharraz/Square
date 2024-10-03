import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Home_Style.css';
import './css/Protfolio_Style.css';
import logo_1 from './images/Hawa Shose/img1.jpg';
import logo_2 from './images/Alia Crocnet/img1.jpg';
import logo_3 from './images/Rawasi/img1.jpg';
import Details from './Details'; // Import Details component
import Project from './ProjectsHome'; // Import Project component

const projects = [
  { title: 'Hawa Shose', image: logo_1 },
  { title: 'Alia Crocnet', image: logo_2 },
  { title: 'Rawasi', image: logo_3 },
];

const Home = ({ setActiveLink }) => {
  const [activeHeart, setActiveHeart] = useState([false, false, false]);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');

  useEffect(() => {
    setActiveLink('home');
  }, [setActiveLink]);

  const toggleHeart = (index) => {
    const updatedHearts = [...activeHeart];
    updatedHearts[index] = !updatedHearts[index];
    setActiveHeart(updatedHearts);
  };

  const openOverlay = (projectTitle) => {
    setOverlayOpen(true);
    setSelectedProjectTitle(projectTitle);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
    setSelectedProjectTitle('');
  };

  return (
    <section id="home" className="home picture">
      
    <section id="projects" className="projects h-200">
      <div className="container">
        <div id="verticalCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                {/* Trigger the overlay when the project is clicked */}
                <div onClick={() => openOverlay(project.title)}>
                  <Project
                    title={project.title}
                    image={project.image}
                    isLiked={activeHeart[index]}
                    toggleHeart={() => toggleHeart(index)}
                    openOverlay={() => openOverlay(project.title)}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#verticalCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#verticalCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Overlay (Details) */}
        {isOverlayOpen && (
          <Details
            projectTitle={selectedProjectTitle} // Pass the selected project title to Details component
            closeOverlay={closeOverlay} // Pass the close function to Details
          />
        )}
      </div>
    </section>
      <div className="container">
        <div className="home-info d-flex align-items-center">
          <div className="home-content">
            <h1 className="home-title mb-2">
              <span className="home-effect">Square</span>
            </h1>
            <h2 className="h6 mb-5 home-effect">
              <span className="home-effect">International Graphic Design</span>
            </h2>
            {/* Link to navigate to the portfolio page */}
            <Link to="/protfolio" className="home-effect">
              <span className="home-effect">View Portfolio</span>
            </Link>
          </div>
          <div className="home-bar">
            <ul className="list-unstyled d-flex justify-content-around w-20">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Home;