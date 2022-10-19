import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import CvHeader from './components/CvHeader';
import ExperienceDiv from './components/ExperienceDiv';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      nameState: 'Name',
      emailState: 'E-mail',
      phoneState: 'Phone Number',
      experienceArray: []
    }

    this.tempArray = [];
  }

  infoCallbackFn = (nameData, emailData, phoneData) => {
    this.setState({
      nameState: nameData,
      emailState: emailData,
      phoneState: phoneData,
    })
  }

  experienceCallBackFn = (experienceData) => {

    this.tempArray.push(experienceData);
    
    this.setState({
      experienceArray: this.tempArray
    }, () => { 
      console.log('new state', this.state)
  })
  }



  
  render() {

    const {nameState, emailState, phoneState, experienceArray} = this.state;

    return (
      <><h1 className='pageHeader'>CV GENERATOR</h1>

      <div className='pageContainer'>

      <div className="formContainer">
        <GeneralInfo callbackFn={this.infoCallbackFn}/>
        <Education/>
        <Experience callbackFn={this.experienceCallBackFn}/>
        <Projects/>
      </div>

      <div className = 'cvContainer'>
        <CvHeader nameState = {nameState} emailState={emailState} phoneState={phoneState}/>
        <ExperienceDiv experienceArray={experienceArray}/>
      </div>
      </div>
      </>
    )
  }
}

export default App;
