import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
   const [experiences, setExperiences] = useState([]);

   useEffect(() => {
      fetch('/experiences.json')
         .then((res) => res.json())
         .then((data) => setExperiences(data));
   }, []);

   console.log(experiences);

   return (
      <>
         <Navbar />
         <HeroSection />
         <About />
         {experiences && <Experience experiences={experiences} />}
      </>
   );
}

export default App;
