import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import CvHeader from './components/CvHeader';
import ExperienceDiv from './components/ExperienceDiv';
import ProjectDiv from './components/ProjectDiv.js'
import EducationDiv from './components/EducationDiv';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      nameState: 'Name',
      emailState: 'E-mail',
      phoneState: 'Phone Number',
      experienceArray: [],
      profileState: '', 
      projectState: '',
      descriptionState: '',
      schoolState: '',
      locationState: '',
      degreeState: ''
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

  projectCallBackFn = (profileData, projectData, descriptionData) => {
    console.log('hey');
    this.setState({
      profileState: profileData,
      projectState: projectData,
      descriptionState: descriptionData,
    })
  }

  educationCallBackFn = (schoolData, locationData, degreeData) => {
    this.setState({
      schoolState: schoolData,
      locationState: locationData,
      degreeState: degreeData
    })
  }



  
  render() {

    const {nameState, emailState, phoneState, experienceArray, profileState, projectState, descriptionState, 
    schoolState, locationState, degreeState} = this.state;

    return (
      <><h1 className='pageHeader'>CV GENERATOR</h1>

      <div className='pageContainer'>

      <div className="formContainer">
        <GeneralInfo callbackFn={this.infoCallbackFn}/>
        <Education callbackFn={this.educationCallBackFn}/>
        <Experience callbackFn={this.experienceCallBackFn}/>
        <Projects callbackFn={this.projectCallBackFn}/>
      </div>

      <div className = 'cvContainer'>
        <CvHeader nameState = {nameState} emailState={emailState} phoneState={phoneState}/>
        <ExperienceDiv experienceArray={experienceArray}/>
        <ProjectDiv profileState={profileState} projectState={projectState} descriptionState={descriptionState}/>
        <EducationDiv schoolState={schoolState} locationState={locationState} degreeState={degreeState} />
      </div>
      </div>
      </>
    )
  }
}

export default App;
