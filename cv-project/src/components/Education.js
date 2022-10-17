import React from 'react';
import EducationForm from './EducationForm';

class Education extends React.Component {
    constructor() {
        super()

        this.state = {
            school: '',
            location: '',
            degree: '',
            subject: '',
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
        if(e.target.id === "subject") {
            this.setState({
                subject: e.target.value,
            })
        }
        console.log(this.state.school, this.state.degree, this.state.subject)
    }

    submitEducation = (e) => {

        e.preventDefault();

        let tempArray = [];
        tempArray.push(this.state.school);
        tempArray.push(this.state.location);
        tempArray.push(this.state.degree);
        tempArray.push(this.state.subject);

        this.setState({
            educationArray: tempArray
        })

        console.log(this.state.educationArray)
    }

    render() {
        const { school, location, degree, subject, educationArray } = this.state;

        return(
            <EducationForm handleChange={this.handleChange} school={school} location={location} degree={degree} subject={subject} submitEducation={this.submitEducation}/>
        )
    }
}

export default Education;