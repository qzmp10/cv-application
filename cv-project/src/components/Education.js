import React from 'react';
import EducationForm from './EducationForm';

class Education extends React.Component {
    constructor() {
        super()

        this.state = {
            school: '',
            location: '',
            degree: '',
            educationArray: []
        }
    }

    handleChange = (e) => {
        if(e.target.id === "school") {
            this.setState({
                school: e.target.value,
            })
        }
        if(e.target.id === "location") {
            this.setState({
                location: e.target.value,
            })
        }
        if(e.target.id === "degree") {
            this.setState({
                degree: e.target.value,
            })
        }
    }

    submitEducation = (e) => {

        e.preventDefault();

        let tempArray = [];
        tempArray.push(this.state.school);
        tempArray.push(this.state.location);
        tempArray.push(this.state.degree);

        this.setState({
            educationArray: tempArray
        }, () => { 
            console.log('new state', this.state);
            this.props.callbackFn(this.state.educationArray);
        })


        console.log(this.state.educationArray)
    }

    render() {
        const { school, location, degree, educationArray } = this.state;

        return(
            <EducationForm handleChange={this.handleChange} school={school} location={location} degree={degree}  submitEducation={this.submitEducation}/>
        )
    }
}

export default Education;