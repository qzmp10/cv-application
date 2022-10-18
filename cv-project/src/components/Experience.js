import React from 'react';
import ExperienceForm from './ExperienceForm';

class Experience extends React.Component {
    constructor() {
        super()

        this.state = {
            title: '',
            field: '',
            company: '',
            location: '',
            duration: '',
            experienceArray: []
        }
    }

    handleChange = (e) => {
        if(e.target.id === "title") {
            this.setState({
                title: e.target.value,
            })
        }
        if(e.target.id === "field") {
            this.setState({
                field: e.target.value,
            })
        }
        if(e.target.id === "company") {
            this.setState({
                company: e.target.value,
            })
        }
        if(e.target.id === "location") {
            this.setState({
                location: e.target.value,
            })
        }
        if(e.target.id === "duration") {
            this.setState({
                duration: e.target.value,
            })
        }

        console.log(this.state.title, this.state.field)
    }

    submitExperience = (e) => {

        e.preventDefault();

        let tempArray = [];
        tempArray.push(this.state.title);
        tempArray.push(this.state.field);
        tempArray.push(this.state.company);
        tempArray.push(this.state.location);
        tempArray.push(this.state.duration);

        this.setState({
            experienceArray: tempArray
        })

        console.log(this.state.experienceArray)
    }

    render() {

        const {title, field, company, location, duration, experienceArray} = this.state;

        return(
            <ExperienceForm title={title} field = {field} company={company} location={location} 
            duration={duration} handleChange={this.handleChange} submitExperience={this.submitExperience}/>
        )
    }
}

export default Experience;