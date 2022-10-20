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
      fileState: '',
      experienceArray: [],
      profileState: '', 
      projectState: '',
      descriptionState: '',
      educationArray: [],
    }

    this.tempArray = [];
    this.tempArray2 = [];
  }

  infoCallbackFn = (nameData, emailData, phoneData, fileData) => {
    let url = URL.createObjectURL(fileData[0]);
    this.setState({
      nameState: nameData,
      emailState: emailData,
      phoneState: phoneData,
      fileState: url
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

  educationCallBackFn = (educationData) => {
    this.tempArray2.push(educationData);

    this.setState({
      educationArray: this.tempArray2
  }, () => { 
      console.log('new state', this.state);
  })

  }



  
  render() {

    const {nameState, emailState, phoneState, experienceArray, profileState, projectState, descriptionState, 
    schoolState, locationState, degreeState, educationArray, fileState} = this.state;

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
        <CvHeader nameState = {nameState} emailState={emailState} phoneState={phoneState} file={fileState}/>
        <ExperienceDiv experienceArray={experienceArray}/>
        <ProjectDiv profileState={profileState} projectState={projectState} descriptionState={descriptionState}/>
        <EducationDiv educationArray={educationArray} />
      </div>
      </div>
      </>
    )
  }
}

export default App;
