import React from 'react';
import styled from 'styled-components';

const ProjectList = ({ name, description, link, image }) => {
   //    console.log(projects[0].image);
   return (
      <a href={link}>
         <div className="project__items">
            <div className="project__items--content">
               <div className="project__items--header">
                  <h3>{name}</h3>
               </div>
               <div className="project__items--description">
                  <p>{description}</p>
               </div>
            </div>
            <ProjectPhoto imagePath={image} />
         </div>
      </a>
   );
};

export default ProjectList;

const ProjectPhoto = styled.div`
   display: flex;
   place-items: center;
   width: 60rem;
   height: 40rem;
   background-image: linear-gradient(
         rgba(35, 62, 83, 0.4),
         rgba(35, 62, 83, 0.6)
      ),
      url(${(props) => props.imagePath});
   background-position: center;
   background-size: cover;
   border-radius: 4px;
   transition: background-image 0.5s;

   &::after {
      content: '';
      display: inline-block;
      background-image: url(${(props) => props.imagePath});
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      opacity: 0;
      -moz-transition: opacity 0.2s ease-in-out;
      -webkit-transition: opacity 0.2s ease-in-out;
      -o-transition: opacity 0.2s ease-in-out;
      transition: opacity 0.2s ease-in-out;
      cursor: pointer;
   }

   &:hover::after {
      opacity: 1;
   }
`;
