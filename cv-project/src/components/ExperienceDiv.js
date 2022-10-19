import React from 'react'

class ExperienceDiv extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {experienceArray} = this.props;
        
        return(
        <>
        <h1 className='experienceHeader'>Experience</h1>
        <div className='experienceDiv'>
            {experienceArray.map((data) => {
                    return(
                        <div className='experienceParent'>
                        <div className = 'title' key={Math.random() * 10000}>{data[0]}</div>
                        <div className='companyLocation' key={Math.random() * 10000}>{data[1]}
                        , {data[2]}</div>
                        <div className = 'duration' key={Math.random() * 10000}>Duration: {data[3]}</div>
                        </div>
                    )
            })}
        </div>
        </>
        )
    }
}

export default ExperienceDiv