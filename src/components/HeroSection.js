import React from 'react';
import './HeroSection.css';
import heroSvg from '../images/coding_flatline.svg';
import undrawCoding from '../images/undraw_coding.svg';

const HeroSection = () => {
   return (
      <section className="section__hero">
         <div className="hero__text">
            <h1 className="hero__text--primary">Hi, my name is...</h1>
            <h2 className="hero__text--secondary">Jacob Wachtel.</h2>
            <h3 className="hero__text--tertiary">
               I create things with <span>React</span>.
            </h3>
            <p className="paragraph">
               I'm a Front-End Developer who uses code and (sometimes) wizardry
               to create amazing sites. It's not just a job, it's a joy.
            </p>
         </div>
         <div className="hero__img">
            <img
               src={undrawCoding}
               loading="lazy"
               alt="profile"
               id="profile-img"
            />
            <div className="border-box"></div>
         </div>
      </section>
   );
};

export default HeroSection;
