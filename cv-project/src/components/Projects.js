import React, {useState} from 'react';
import ProjectForm from './ProjectForm';

function Projects(props) {
    const [profile, setProfile] = useState('');
    const [project, setProject] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleChange = (e) => {

        if (e.target.id === "profile") {
            setProfile(e.target.value);
        }
        if (e.target.id === "project") {
            setProject(e.target.value);
        }
        if (e.target.id === "projectDescription") {
            setProjectDescription(e.target.value);
        }
    }

    const submitProjects = (e) => {
        e.preventDefault();

        props.callbackFn(profile, project, projectDescription);
    }

    return (
        <ProjectForm profile={profile} project={project}
            projectDescription={projectDescription} submitProjects={submitProjects} handleChange={handleChange} />
    )
}

export default Projects;