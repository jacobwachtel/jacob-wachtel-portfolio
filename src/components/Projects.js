import React from 'react';
import './Projects.css';
import ProjectList from './ProjectList';
import Loading from './Loading';

const Projects = ({ projects }) => {
   return (
      <section className="projects__container">
         <div className="projects__heading">
            <h2 className="projects__heading--primary">
               <span>(3)</span>Projects
            </h2>
            <div className="heading-line"></div>
         </div>
         <div className="all-projects">
            {projects.length <= 0 ? (
               <Loading />
            ) : (
               projects.map((project, index) => (
                  <ProjectList
                     key={index}
                     name={project.name}
                     description={project.description}
                     image={project.image}
                     link={project.link}
                  />
               ))
            )}
         </div>
      </section>
   );
};

export default Projects;

//  {
//     projects &&
//        projects.map((project, index) => (
//           <ProjectList
//              key={index}
//              name={project.name}
//              description={project.description}
//              image={project.image}
//              link={project.link}
//           />
//        ));
//  }
