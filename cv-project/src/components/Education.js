import React, { useState, useEffect, useRef } from 'react';
import EducationForm from './EducationForm';

function Education(props) {
    const [school, setSchool] = useState('');
    const [location, setLocation] = useState('');
    const [degree, setDegree] = useState('');
    const [educationArray, setEducationArray] = useState([]);

    const counter = useRef(0)

    useEffect(() => {
        counter.current = counter.current + 1
        if (counter.current >= 3) {
            console.log('wait for it...', educationArray);
            props.callbackFn(educationArray);
        }

    }, [educationArray])

    const handleChange = (e) => {
        if (e.target.id === "school") {
            setSchool(e.target.value);
        }
        if (e.target.id === "location") {
            setLocation(e.target.value);
        }
        if (e.target.id === "degree") {
            setDegree(e.target.value)
        }
    }

    const submitEducation = (e) => {
        e.preventDefault();

        let tempArray = [];
        tempArray.push(school);
        tempArray.push(location);
        tempArray.push(degree);

        setEducationArray(tempArray);
    }

    return (
        <EducationForm handleChange={handleChange} school={school} location={location} degree={degree} submitEducation={submitEducation} />
    )
}

export default Education;