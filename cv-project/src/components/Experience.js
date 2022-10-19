import React from 'react';
import ExperienceForm from './ExperienceForm';

class Experience extends React.Component {
    constructor() {
        super()

        this.state = {
            title: '',
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

        console.log(this.state.title)
    }

    submitExperience = (e) => {

        e.preventDefault();

        console.log('changing state')

        let tempArray = [];
        tempArray.push(this.state.title);
        tempArray.push(this.state.company);
        tempArray.push(this.state.location);
        tempArray.push(this.state.duration);

        this.setState({
            experienceArray: tempArray
        }, () => { 
            console.log('new state', this.state);
            this.props.callbackFn(this.state.experienceArray);
        })

        

        console.log(this.state.experienceArray)
    }

    render() {

        const {title, company, location, duration, experienceArray} = this.state;

        return(
            <ExperienceForm title={title} company={company} location={location} 
            duration={duration} handleChange={this.handleChange} submitExperience={this.submitExperience}/>
        )
    }
}

export default Experience;