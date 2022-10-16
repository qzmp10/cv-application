import React from 'react';

class InfoStyled extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {display} = this.props;
        const {infoArray} = this.props;

        return (
            <div className={display}>  
            {infoArray.map((info) => {
                return(
                    <div className={info} key={info}>{info}</div>
                )
            })}
            </div>
        )
    }

}

export default InfoStyled;
