import React, { useEffect, useState, useRef } from 'react';
import ExperienceForm from './ExperienceForm';

function Experience(props) {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');
    const [experienceArray, setExperienceArray] = useState([]);

    const counter = useRef(0);

    useEffect(() => {
        //components mounts + renders, which makes any function here run twice, therefore,
        // i do a counter, and only when component renders twice do i use the callback function 
        counter.current = counter.current + 1;
        console.log(counter.current)
        if (counter.current >= 3) {
            console.log('wait for it...', experienceArray);
            props.callbackFn(experienceArray);
        }

    }, [experienceArray])

    const handleChange = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value);
        }
        if (e.target.id === "company") {
            setCompany(e.target.value);
        }
        if (e.target.id === "location") {
            setLocation(e.target.value);
        }
        if (e.target.id === "duration") {
            setDuration(e.target.value);
        }
    }

    const submitExperience = (e) => {

        e.preventDefault();


        let tempArray = [];
        tempArray.push(title);
        tempArray.push(company);
        tempArray.push(location);
        tempArray.push(duration);

        setExperienceArray(tempArray);
    }

    return (
        <ExperienceForm title={title} company={company} location={location}
            duration={duration} handleChange={handleChange} submitExperience={submitExperience} />
    )

}
export default Experience;