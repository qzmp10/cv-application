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

    this.state = {
      nameState: 'Name',
      emailState: 'E-mail',
      phoneState: 'Phone Number'
    }

  }

  infoCallbackFn = (nameData, emailData, phoneData) => {
    this.setState({
      nameState: nameData,
      emailState: emailData,
      phoneState: phoneData,
    })
  }

  educationCallBackFn = (schoolData, locationData, degreeData) => {
    console.log('hey');
  }
  
  render() {

    console.log(this.state.nameState);
    const {nameState, emailState, phoneState} = this.state;

    return (
      <><h1 className='pageHeader'>CV GENERATOR</h1>

      <div className='pageContainer'>

      <div className="formContainer">
        <GeneralInfo callbackFn={this.infoCallbackFn}/>
        <Education/>
        <Experience/>
        <Projects/>
      </div>

      <div className = 'cvContainer'>
        <CvHeader nameState = {nameState} emailState={emailState} phoneState={phoneState}/>
      </div>
      </div>
      </>
    )
  }
}

export default App;
