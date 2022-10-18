import React from "react"

class ProjectForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <form>
                 <h2 className = "formHeader">Github</h2>
                    <div className='inputDiv'>
                      <label htmlFor="">Github Profile: </label>
                      <input 
                    //   onChange=''
                    //   value=''
                      id=''
                      type='url'
                      placeholder='Example: https://github.com/user'/>
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="">Top Project: </label>
                    <input 
                    // onChange=''
                    //   value=''
                      id='' 
                      type="url"
                      placeholder='Example: https://github.com/user/project-repo'
                      />
                    </div> 

                    <div className='inputDiv'>
                    <label htmlFor="">Project Description: </label>
                    <textarea 
                    id=''
                    // value=''
                    // onChange=''
                    > </textarea>
                    </div> 

                    <button className="submit" type="submit">Submit</button>
            </form>
        )
    }
}

export default ProjectForm