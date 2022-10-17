import React from "react"

class EducationForm extends React.Component {
    constructor() {
        super()
    }

    render() {

        const {handleChange} = this.props;
        const {school} = this.props;
        const {degree} = this.props;
        const {location} = this.props;
        const {subject} = this.props;
        const {submitEducation} = this.props;

        return(
            <form onSubmit={submitEducation} className='education'>
                    <h2 className = "formHeader">Education</h2>
                    <div className='inputDiv'>
                      <label htmlFor="school">School: </label>
                      <input 
                      onChange={handleChange}
                      value={school}
                      id="school" 
                      type="text"/>
                    </div>

                    <div className='inputDiv'>
                      <label htmlFor="location">Location: </label>
                      <input 
                      onChange={handleChange}
                      value={location}
                      id="location" 
                      type="text"/>  
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="degree">Degree: </label>
                    <input 
                    onChange={handleChange}
                      value={degree}
                      id="degree" 
                      type="text"/>
                    </div>   

                    <div className='inputDiv'>
                    <label htmlFor="subject">Subject: </label>
                    <input 
                    onChange={handleChange}
                      value={subject}
                      id="subject" 
                      type="text"/>
                    </div>   

                    <button className="submit" type="submit">Submit</button>
                </form>
        )
    }
}

export default EducationForm