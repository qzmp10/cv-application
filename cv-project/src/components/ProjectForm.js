import React from "react"

function ProjectForm(props) {
  const { profile, project, projectDescription, submitProjects, handleChange } = props;

  return (
    <form onSubmit={submitProjects}>
      <h2 className="formHeader">Github</h2>
      <div className='inputDiv'>
        <label htmlFor="profile">Github Profile </label>
        <input
          onChange={handleChange}
          value={profile}
          id='profile'
          type='url'
          placeholder='Example: https://github.com/user' />
      </div>

      <div className='inputDiv'>
        <label htmlFor="project">Top Project </label>
        <input
          onChange={handleChange}
          value={project}
          id='project'
          type="url"
          placeholder='Example: https://github.com/user/project-repo'
        />
      </div>

      <div className='inputDiv'>
        <label htmlFor="projectDescription">Project Description </label>
        <textarea
          id='projectDescription'
          value={projectDescription}
          onChange={handleChange}
        > </textarea>
      </div>

      <button className="submit" type="submit">Submit</button>
    </form>
  )
}

export default ProjectForm