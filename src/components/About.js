import React from 'react';
import './About.css';

const About = () => {
   return (
      <section className="section__about">
         <div className="section__heading">
            <h2 className="section__heading--primary">
               <span>(1)</span>About
            </h2>
            <div className="heading-line"></div>
            <div className="section__heading--text">
               <p>
                  Two years ago after losing my job to Covid, I was ready for a
                  career change and began looking into IT certifications. I
                  started taking Network+, stumbled upon a Javascript course and
                  realized...this is what I want to do, instead!
               </p>
               <p>
                  <span className="red-text">It blew me away</span>...I loved
                  it!
               </p>
               <p>
                  What you could do, and what you could create...It was amazing!
                  And it hit all of my passions: analyzing, problem-solving,
                  some creativity and design, and system development and scale.{' '}
               </p>
               <p>
                  It isn’t just functional, it can be beautiful as well. I found
                  I love making something come to life before my eyes, typing
                  away and seeing something develop from nothing. Creating
                  something beautiful and aesthetically pleasing. Building
                  something practical and useful, something seamless and easy to
                  use, and{' '}
                  <span className="red-text">
                     something that can actually make people’s lives better and
                     far more enriching
                  </span>
                  .
               </p>
               <p>
                  It's cliche, I know, but it’s still a value of mine. And, like
                  building something with code, I’m dependable and moldable. I
                  value clarity in design and in communication. And, I love
                  working with a team to get the job done.
               </p>
            </div>
         </div>
         <div className="section__tech">
            <h3 className="section__tech--primary">
               Here are some of the technologies I work with...
            </h3>
            <ul className="section__tech--items">
               <li>JavaScript (ES6+)</li>
               <li>Node</li>
               <li>React</li>
               <li>Redux</li>
               <li>Firebase</li>
               <li>Express</li>
            </ul>
         </div>
      </section>
   );
};

export default About;
