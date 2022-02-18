import React from 'react';
import './Navbar.css';

const Navbar = () => {
   return (
      <>
         <nav className="nav">
            <img src="#" alt="" className="nav__img" />
            <div className="nav__list">
               <ul className="nav__list--items">
                  <li>Home</li>
                  <li>Projects</li>
                  <li>About</li>
                  <li>Hobbies</li>
                  <li>Experience</li>
                  <li>Contact</li>
               </ul>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
