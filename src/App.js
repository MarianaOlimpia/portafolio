import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
