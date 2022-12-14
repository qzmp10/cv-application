import React from "react"

class EducationDiv extends React.Component {
    
    constructor(){
        super()
    }

    render() {

        const {educationArray} = this.props;

        return(
            <>
            <h2 className='educationHeader'>Education</h2>
            <div className='educationDiv'>
                {educationArray.map((data) => {
                        return(
                            <div className='educationContainer'>
                            <div className = 'degree' key={Math.random() * 10000}>{data[2]}</div>
                            <div className='school' key={Math.random() * 10000}>{data[0]}
                            , {data[1]}</div>
                            </div>
                        )
                })}
            </div>
            </>
        )
    }
}

export default EducationDiv

