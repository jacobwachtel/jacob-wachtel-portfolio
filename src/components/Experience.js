import React, { useState } from 'react';
import './Experience.css';
import ExperienceButton from './ExperienceButton';
import ExperienceHistory from './ExperienceHistory';

const Experience = ({ experiences }) => {
   // let first = experiences[0];
   // console.log(first);

   // const displayWorkHistory = (props, experience, arr) => {
   //    if (props) {
   //       return (
   //          <ExperienceHistory
   //             key={arr}
   //             name={experience.name}
   //             title={experience.title}
   //             dates={experience.dates}
   //             bullets={experience.bullets}
   //             isActive={isWorkButtonOneActive}
   //          />
   //       );
   //    }
   // };

   // const showHistoryOne = () => {
   //    setShowHistoryOne(true);
   //    setShowHistoryTwo(false);
   //    setShowHistoryThree(false);
   // };
   // const showHistoryTwo = () => {
   //    setShowHistoryOne(false);
   //    setShowHistoryTwo(true);
   //    setShowHistoryThree(false);
   // };
   // const showHistoryThree = () => {
   //    setShowHistoryOne(false);
   //    setShowHistoryTwo(false);
   //    setShowHistoryThree(true);
   // };

   console.log(experiences);
   return (
      <section className="experience">
         <div className="experience__container">
            <div className="experience__heading">
               <h2 className="experience__heading--primary">
                  <span>(2)</span>Experience
               </h2>
               <div className="heading-line"></div>
            </div>
            <div className="experience__box">
               {experiences.length > 0 && (
                  <div className="experience__history">
                     <ExperienceHistory
                        name={experiences[0].name}
                        title={experiences[0].title}
                        dates={experiences[0].dates}
                        bullets={experiences[0].bullets}
                     />
                     <ExperienceHistory
                        name={experiences[1].name}
                        title={experiences[1].title}
                        dates={experiences[1].dates}
                        bullets={experiences[1].bullets}
                     />
                     <ExperienceHistory
                        name={experiences[2].name}
                        title={experiences[2].title}
                        dates={experiences[2].dates}
                        bullets={experiences[2].bullets}
                     />
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

// const firstHistory = (prop) => {
//    <ExperienceHistory
//       key={1}
//       name={first.name}
//       title={first.title}
//       dates={first.dates}
//       bullets={first.bullets}
//       isActive={isWorkButtonOneActive}
//    />;
// };
// const History = (first) => {
//    <ExperienceHistory
//       key={1}
//       name={first.name}
//       title={first.title}
//       dates={first.dates}
//       bullets={first.bullets}
//       isActive={isWorkButtonOneActive}
//    />;
// };
// const firstHistory = (first) => {
//    <ExperienceHistory
//       key={1}
//       name={first.name}
//       title={first.title}
//       dates={first.dates}
//       bullets={first.bullets}
//       isActive={isWorkButtonOneActive}
//    />;
// };

export default Experience;

/*
    /* {experiences.map((each, index) => (
                     <ExperienceButton key={index} name={each.name} />
                     <ExperienceHistory
                     key={index}
                     name={each.name}
                     title={each.title}
                     dates={each.dates}
                     bullets={each.bullets}
                     />
                  ))} */

/* <button className="btn btn__experience" onClick={displayWorkHistory}>
                     theITSupportCenter
                  </button>
                  <button className="btn btn__experience">
                     theITSupportCenter
                  </button>
                  <button className="btn btn__experience">
                     theITSupportCenter
                  </button>
               </div>
               <div > */

/* </div> 
               // if(this.state.displayQuestions ) {
                  
               // }
               // <ExperienceHistory 
               //    key={1}
               //    name={first.name}
               //    title={first.title}
               //    dates={first.dates}
               //    bullets={first.bullets}
               //    isActive={isWorkButtonOneActive}
               //    />
               // <ExperienceHistory 
               // key={2}
               //    name={first.name}
               //    title={first.title}
               //    dates={first.dates}
               //    bullets={first.bullets}
               //    isActive={isWorkButtonTwoActive}
               //    />
               // <ExperienceHistory 
               // key={3}
               //    name={first.name}
               //    title={first.title}
               //    dates={first.dates}
               //    bullets={first.bullets}
               //    isActive={isWorkButtonThreeActive}
               //    />
               {/* {experiences &&
                  experiences.map((each, index) => (
                     <ExperienceHistory
                        key={index}
                        name={each.name}
                        
                     />
                  ))} 
                  // </div> */
