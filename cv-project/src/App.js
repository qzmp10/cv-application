import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className = "mainContainer">
      <div className="topContainer">
      <GeneralInfo/>
      <Education/>
      </div>
      <div className="bottomContainer">
        <Projects/>
        <Experience/>
      </div>
    </div>
  );
}

export default App;
