import React from 'react';
import './Projects.css';
import splitterApp from '../images/splitter-app.png';

const Projects = () => {
   return (
      <section className="projects__container">
         <div className="projects__heading">
            <h2 className="projects__heading--primary">
               <span>(3)</span>Projects
            </h2>
         </div>
         <div className="project__items">
            <div className="project__items--content">
               <div className="project__items--header">
                  <h3>Project Name</h3>
               </div>
               <div className="project__items--description">
                  <p>
                     Short Project Description about what it is, what it does,
                     and what it was built with
                  </p>
               </div>
            </div>
            <img src={splitterApp} alt="project title" id="project-photo" />
         </div>
      </section>
   );
};

export default Projects;
