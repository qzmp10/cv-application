import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import CvHeader from './components/CvHeader';

class App extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <><h1 className='pageHeader'>CV GENERATOR</h1>

      <div className='pageContainer'>

      <div className="formContainer">
        <GeneralInfo/>
        <Education/>
        <Experience/>
        <Projects/>
      </div>

      <div className = 'cvContainer'>
        <CvHeader/>
      </div>
      </div>
      </>
    )
  }
}

export default App;
