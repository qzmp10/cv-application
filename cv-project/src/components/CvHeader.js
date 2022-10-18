import React from 'react';

class CvHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='cvHeader'>
                <div className='picture'></div>
                <div className='info'>
                    <div className='name'></div>
                    <div className='email'></div>
                    <div className='phone'></div>
                </div>
            </div>
        )
    }

}

export default CvHeader;
