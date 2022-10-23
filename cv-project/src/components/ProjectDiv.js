import React from 'react'

function ProjectDiv(props) {
    const { profileState, projectState, descriptionState } = props;

    return (
        <div className='projectContainer'>
            <h2 className='projectsHeader'>Projects</h2>
            <div className='gh'>Github Profile:</div>
            <div className='profile'>{profileState}</div>
            <div className='top'>Top Project:</div>
            <div className='project'>{projectState}</div>
            <div className='rm'>README.md</div>
            <div className='description'>{descriptionState}</div>
        </div>
    )
}

export default ProjectDiv