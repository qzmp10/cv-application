import React from 'react'

function ExperienceDiv(props) {

    const { experienceArray } = props;

    return (
        <>
            <h2 className='experienceHeader'>Experience</h2>
            <div className='experienceDiv'>
                {experienceArray.map((data) => {
                    return (
                        <div className='experienceParent'>
                            <div className='title' key={Math.random() * 10000/38}>{data[0]}</div>
                            <div className='companyLocation' key={Math.random() * 10000/74}>{data[1]}
                                , {data[2]}</div>
                            <div className='duration' key={Math.random() * 10000/16.3}>Duration: {data[3]}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ExperienceDiv