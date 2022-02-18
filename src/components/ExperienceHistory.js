import React from 'react';
import './ExperienceHistory.css';
import ExperienceBullets from './ExperienceBullets';

const ExperienceHistory = ({ name, title, dates, bullets }) => {
   return (
      <div className="experience__history--item">
         <div className="experience__history--header">
            <h3 className="history__header--primary">
               {title} <span>@ {name}</span>
            </h3>
            <p>{dates}</p>
         </div>
         <div className="experience__history--list">
            {bullets.map((bullet, index) => (
               <ExperienceBullets key={index} bullet={bullet} />
            ))}
         </div>
      </div>
   );
};

export default ExperienceHistory;
