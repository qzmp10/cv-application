import React from 'react';

function CvHeader(props) {
    const { nameState, emailState, phoneState, file } = props
    return (
        <div className='cvHeader'>
            <img className='picture' src={file} alt='Your Profile' />
            <div className='info'>
                <div className='name'>{nameState}</div>
                <div className='email'>{emailState}</div>
                <div className='phone'>{phoneState}</div>
            </div>
        </div>
    )
}

export default CvHeader;
