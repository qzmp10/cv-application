import React from 'react'

class ExperienceForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const {title} = this.props;
        const {company} = this.props;
        const {location} = this.props;
        const {duration} = this.props;
        const {handleChange} = this.props;
        const {submitExperience} = this.props;

        return(
            <form onSubmit={submitExperience} className='experience'>
                <h2 className = "formHeader">Experience</h2>
                    <div className='inputDiv'>
                      <label htmlFor="title">Job Title: </label>
                      <input 
                      onChange={handleChange}
                      value={title}
                      id='title' 
                      type="text"/>
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="company">Company: </label>
                    <input 
                    onChange={handleChange}
                      value={company}
                      id='company' 
                      type="text"/>
                    </div> 

                    <div className='inputDiv'>
                    <label htmlFor="location">Location: </label>
                    <input 
                    onChange={handleChange}
                      value={location}
                      id='location' 
                      type="text"/>
                    </div> 

                    <div className='inputDiv'>
                    <label htmlFor="duration">Duration: </label>
                    <input 
                    onChange={handleChange}
                      value={duration}
                      id='duration' 
                      type="text"/>
                    </div> 
                   
                    <button className="submit" type="submit">Submit</button>

            </form>
        )
    }
}

export default ExperienceForm