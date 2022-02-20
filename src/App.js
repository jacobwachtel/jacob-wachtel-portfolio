import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
   const [experiences, setExperiences] = useState([]);
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      fetch('/experiences.json')
         .then((res) => res.json())
         .then((data) => setExperiences(data));
   }, []);

   useEffect(() => {
      fetch('/projects.json')
         .then((res) => res.json())
         .then((data) => setProjects(data));
   }, []);

   console.log(projects);

   return (
      <>
         <Navbar />
         <HeroSection />
         <About />
         {experiences && <Experience experiences={experiences} />}
         {projects && <Projects projects={projects} />}
      </>
   );
}

export default App;
