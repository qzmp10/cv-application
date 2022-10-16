import React from 'react';
import InfoStyled from './InfoStyled';
import InfoForm from "./InfoForm"

class GeneralInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            info: {
                name: '',
                email: '',
                phone: ''
            },
            infoArray: [],
            infoDisplay: 'hidden',
            formDisplay: 'visible',
        }

    }

    handleChange = (e) => {
        if(e.target.id === "name") {
            this.setState({
                info: {  
                    name: e.target.value,
                    email: this.state.info.email,
                    phone: this.state.info.phone
                }
            })
        }
        if(e.target.id === "email") {
            this.setState({
                info: {  
                    name: this.state.info.name,
                    email: e.target.value,
                    phone: this.state.info.phone
                }
            })
        }
        if(e.target.id === "phone") {
            this.setState({
                info: {  
                    name: this.state.info.name,
                    email: this.state.info.email,
                    phone: e.target.value
                }
            })
        }

    }

    submitInfo = (e) => {
        e.preventDefault();

        this.setState({
            infoArray: this.state.infoArray.concat(this.state.info),
        })
        
        let sampleString = "hidden"; 
        let infoSampleString = "visible";

        this.setState({
            formDisplay: sampleString,
            infoDisplay: infoSampleString
        })

        console.log(this.state.formDisplay)
        console.log(this.classes)
        console.log(document.querySelector('form').classList)

    }

    updateState() {
        return this.state;
    }

    render() {
        const { info, infoArray, infoDisplay, formDisplay } = this.state;

        return(
            <div className="generalInfo">
                <InfoStyled display={infoDisplay}/>
                <InfoForm submitInfo={this.submitInfo} handleChange={this.handleChange} info={info} display={formDisplay} />
            </div>
        )
    }
}

export default GeneralInfo;