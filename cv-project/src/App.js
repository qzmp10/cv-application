import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import CvHeader from './components/CvHeader';
import ExperienceDiv from './components/ExperienceDiv';
import ProjectDiv from './components/ProjectDiv.js'
import EducationDiv from './components/EducationDiv';

// class App extends React.Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       nameState: 'Name',
//       emailState: 'E-mail',
//       phoneState: 'Phone Number',
//       fileState: '',
//       experienceArray: [['Job', 'Company', 'Location', '5 years']],
//       profileState: 'Profile URL', 
//       projectState: 'Top Project URL',
//       descriptionState: 'I consider this my top project because reasons. I learned this, this and this. This project made me practice my skills in this and that...',
//       educationArray: [['School', 'Location', 'Degree']],
//     }

//     this.tempArray = [];
//     this.tempArray2 = [];
//   }

//   infoCallbackFn = (nameData, emailData, phoneData, fileData) => {

//     let url = URL.createObjectURL(fileData[0]);
//     this.setState({
//       nameState: nameData,
//       emailState: emailData,
//       phoneState: phoneData,
//       fileState: url
//     })
//   }

//   experienceCallBackFn = (experienceData) => {
//     this.tempArray.push(experienceData);

//     this.setState({
//       experienceArray: this.tempArray
//     }, () => { 
//       console.log('new state', this.state)
//   })
//   }

//   projectCallBackFn = (profileData, projectData, descriptionData) => {
//     console.log('hey');
//     this.setState({
//       profileState: profileData,
//       projectState: projectData,
//       descriptionState: descriptionData,
//     })
//   }

//   educationCallBackFn = (educationData) => {
//     this.tempArray2.push(educationData);

//     this.setState({
//       educationArray: this.tempArray2
//   }, () => { 
//       console.log('new state', this.state);
//   })

//   }




//   render() {

//     const {nameState, emailState, phoneState, experienceArray, profileState, projectState, descriptionState, 
//     schoolState, locationState, degreeState, educationArray, fileState} = this.state;

//     return (
//       <><h1 className='pageHeader'>CV GENERATOR</h1>

//       <div className='pageContainer'>

//       <div className="formContainer">
//         <GeneralInfo callbackFn={this.infoCallbackFn}/>
//         <Education callbackFn={this.educationCallBackFn}/>
//         <Experience callbackFn={this.experienceCallBackFn}/>
//         <Projects callbackFn={this.projectCallBackFn}/>
//       </div>

//       <div className = 'cvContainer'>
//         <CvHeader nameState = {nameState} emailState={emailState} phoneState={phoneState} file={fileState}/>
//         <ExperienceDiv experienceArray={experienceArray}/>
//         <ProjectDiv profileState={profileState} projectState={projectState} descriptionState={descriptionState}/>
//         <EducationDiv educationArray={educationArray} />
//       </div>
//       </div>
//       </>
//     )
//   }
// }

function App(props) {
  const [nameState, setNameState] = useState('Name');
  const [emailState, setEmailState] = useState('E-mail');
  const [phoneState, setPhoneState] = useState('Phone');
  const [fileState, setFileState] = useState('');
  const [experienceArray, setExperienceArray] = useState([['Job', 'Company', 'Location', '5 years']]);
  const [profileState, setProfileState] = useState('Profile URL');
  const [projectState, setProjectState] = useState('Top project URL');
  const [descriptionState, setDescriptionState] = useState('I consider this my top project because reasons. I learned this, this and this. This project made me practice my skills in this and that...');
  const [educationArray, setEducationArray] = useState([['School', 'Location', 'Degree']]);
  const [update, setUpdate] = useState(0);

  // const counter = useRef(0)
  const tempArray = useRef([]);
  const tempArray2 = useRef([]);

  useEffect(() => {
    // counter.current = counter.current + 1
    // if (counter.current >= 3) {
    //   // console.log('wait for it...', educationArray);
    //   console.log('wait for it...', experienceArray)
    //   console.log('wait for it...', educationArray);
    // }
      console.log('wait for it...', experienceArray)
      console.log('wait for it...', educationArray);
  })

  const infoCallbackFn = (nameData, emailData, phoneData, fileData) => {

    let url = URL.createObjectURL(fileData[0]);

    setNameState(nameData);
    setEmailState(emailData);
    setPhoneState(phoneData);
    setFileState(url);

  }

  const experienceCallBackFn = (experienceData) => {
    console.log('data', experienceData);
    tempArray.current.push(experienceData);
    console.log('temp', tempArray.current);

    setExperienceArray(tempArray.current)
    setUpdate(update + 1) // this is to render my component because for some reason my experienceArray doesnt render 
    //if i dont update the state of another property
    console.log(experienceArray)
  }

  const projectCallBackFn = (profileData, projectData, descriptionData) => {
    console.log('hey');
    setProfileState(profileData);
    setProjectState(projectData);
    setDescriptionState(descriptionData);
  }

  const educationCallBackFn = (educationData) => {
    tempArray2.push(educationData);

    setEducationArray(tempArray2);

  }

  return (
    <><h1 className='pageHeader'>CV GENERATOR</h1>

      <div className='pageContainer'>

        <div className="formContainer">
          <GeneralInfo callbackFn={infoCallbackFn} />
          <Education callbackFn={educationCallBackFn} />
          <Experience callbackFn={experienceCallBackFn} />
          <Projects callbackFn={projectCallBackFn} />
        </div>

        <div className='cvContainer'>
          <CvHeader nameState={nameState} emailState={emailState} phoneState={phoneState} file={fileState} />
          <ExperienceDiv experienceArray={experienceArray} />
          <ProjectDiv profileState={profileState} projectState={projectState} descriptionState={descriptionState} />
          <EducationDiv educationArray={educationArray} />
        </div>
      </div>
    </>
  )

}

export default App;
