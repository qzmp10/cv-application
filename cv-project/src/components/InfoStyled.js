import React from 'react';

class InfoStyled extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {display} = this.props;

        return (
            <div className={display}> Hello ! </div>
        )
    }

}

export default InfoStyled;
