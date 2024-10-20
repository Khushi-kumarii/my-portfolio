import React from 'react';

const Portfolio = () => {
  return (
    <div className="section portfolio">
      <h2 className='p'>My Portfolio</h2>
      <div className="portfolio-content">
        <div className="portfolio-image"></div>
        <div className="projects">
          <div className="project">
            <h2>Doctor's App</h2>
            <p>This is a React-based website aimed at providing accessible
              and personalized healthcare services to users.</p>
            <a className="button" href="https://khushi-kumarii.github.io/reactlivedoctor/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <div className="project">
            <h2>Amazon</h2>
            <p>The Amazon e is a fully functional e-commerce
              platform built using HTML and CSS and Javascript. It replicates the familiar layout and design of Amazon.
            </p>
            <a className="button" href="https://khushi-kumarii.github.io/amazonclo.github.io/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
