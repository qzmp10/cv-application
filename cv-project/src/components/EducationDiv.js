import React from "react"

class EducationDiv extends React.Component {
    
    constructor(){
        super()
    }

    render() {

        const {schoolState, degreeState, locationState} = this.props;

        return(
            <>
            <h2 className='educationHeader'>Education</h2>
            <div className='educationContainer'>
                <div className='degree'>{degreeState}</div>
                <div className='school'>{schoolState}</div>
                <div className='location'>{locationState}</div>
            </div>
            </>

        )
    }
}

export default EducationDiv