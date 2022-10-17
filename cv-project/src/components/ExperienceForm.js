import React from 'react'

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <form className='experience'>
                <h2 className = "formHeader">Experience</h2>
                    <div className='inputDiv'>
                      <label htmlFor="">Job Title: </label>
                      <input 
                      onChange=''
                      value=''
                      id='' 
                      type="text"/>
                    </div>

                    <div className='inputDiv'>
                      <label htmlFor="">Field: </label>
                      <input 
                      onChange=''
                      value=''
                      id=''
                      type="text"/>  
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="">Company: </label>
                    <input 
                    onChange=''
                      value=''
                      id='' 
                      type="text"/>
                    </div> 

                    <div className='inputDiv'>
                    <label htmlFor="">Location: </label>
                    <input 
                    onChange=''
                      value=''
                      id='' 
                      type="text"/>
                    </div> 

                    <div className='inputDiv'>
                    <label htmlFor="">Duration: </label>
                    <input 
                    onChange=''
                      value=''
                      id='' 
                      type="text"/>
                    </div> 
                   
                    <button className="submit" type="submit">Submit</button>

            </form>
        )
    }
}

export default ExperienceForm