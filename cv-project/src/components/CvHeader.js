import React from 'react';
import GeneralInfo from './GeneralInfo';

class CvHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {nameState, emailState, phoneState, file} = this.props;

        return (
            <div className='cvHeader'>
                <img className='picture' src={file} alt='Your Profile'/>
                <div className='info'>
                    <div className='name'>{nameState}</div>
                    <div className='email'>{emailState}</div>
                    <div className='phone'>{phoneState}</div>
                </div>
            </div>
        )
    }

}

export default CvHeader;
