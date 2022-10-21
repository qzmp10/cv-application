import React, { useState } from 'react';
import InfoForm from "./InfoForm"

function GeneralInfo(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    const handleChange = (e) => {

        if (e.target.id === "name") {
            setName(e.target.value)
        }
        if (e.target.id === "email") {
            setEmail(e.target.value)
        }
        if (e.target.id === "phone") {
            setPhone(e.target.value)
        }
    }

    const handleFile = (e) => {

        e.preventDefault();

        setFileUrl(e.target.files);
    }

    const submitInfo = (e) => {
        e.preventDefault();

        let tempArray = [];

        tempArray.push(name)
        tempArray.push(email)
        tempArray.push(phone)
        tempArray.push(fileUrl)

        props.callbackFn(name, email, phone, fileUrl)
    }

    return (
        <div className="generalInfo">
            <InfoForm submitInfo={submitInfo} handleChange={handleChange} handleFile={handleFile} name={name} phone={phone} email={email} fileUrl={fileUrl} />
        </div>
    )

}

export default GeneralInfo;