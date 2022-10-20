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
                            <div className = 'degree' key={Math.random() * 10000}>{data[0]}</div>
                            <div className='school' key={Math.random() * 10000}>{data[1]}
                            , {data[2]}</div>
                            <div className = 'location' key={Math.random() * 10000}>Location: {data[3]}</div>
                            </div>
                        )
                })}
            </div>
            </>
        )
    }
}

export default EducationDiv

