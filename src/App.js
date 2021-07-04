import './App.scss';
import { Header } from './components/Header.js';
import React from "react";
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Showcase } from './components/Showcase';
import { ContactMe } from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Showcase />
      <ContactMe />
    </div>
  );
}

export default App;
