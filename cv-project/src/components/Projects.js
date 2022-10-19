import React from 'react';
import ProjectForm from './ProjectForm';

class Projects extends React.Component {
    constructor() {
        super()

        this.state = {
            profile: '',
            project: '',
            projectDescription: '',
            githubArray: []
        }
    }

    handleChange = (e) => {

            if(e.target.id === "profile") {
                this.setState({
                    profile: e.target.value,
                })
            }
            if(e.target.id === "project") {
                this.setState({
                    project: e.target.value,
                })
            }
            if(e.target.id === "projectDescription") {
                this.setState({
                    projectDescription: e.target.value,
                })
            }

            console.log(this.state.profile)
    }

    submitProjects = (e) => {
        e.preventDefault();

        let tempArray = [];
        tempArray.push(this.state.profile);
        tempArray.push(this.state.project);
        tempArray.push(this.state.projectDescription);

        this.setState({
            githubArray: tempArray
        })

        this.props.callbackFn(this.state.profile, this.state.project, this.state.projectDescription)

        console.log(this.state.githubArray)
    }
    

    render() {

        const {profile, project, projectDescription, githubArray} = this.state;

        return(
            <ProjectForm profile={profile} project={project} 
            projectDescription={projectDescription} submitProjects={this.submitProjects} handleChange={this.handleChange}/>
        )
    }
}

export default Projects;