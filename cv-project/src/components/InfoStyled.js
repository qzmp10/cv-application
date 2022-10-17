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
                if(infoArray.indexOf(info) == 0) {
                    return(
                        <>
                        <div className='name' key={info}>{info}</div></>
                    )
                } else if (infoArray.indexOf(info) == 1){
                    return(
                        <div className="email">
                            <div>E-mail:</div>
                            <div className='contact' key={info}>{info}</div>
                         </div>
 
                    )
                } else {
                    return(
                    <div className="phone">
                        <div>Phone Number:</div>
                        <div className='contact' key={info}>{info}</div>
                    </div>   
                    )
                }

            })}
            <div className={`${display} photo`}> Picture </div>
            </div>
        )
    }

}

export default InfoStyled;
