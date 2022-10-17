import React from 'react';
import InfoStyled from './InfoStyled';
import InfoForm from "./InfoForm"
import uniqid from "uniqid";

class GeneralInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            infoArray: [],
            id: uniqid(),
            // styleDisplay: 'hidden',
            // formDisplay: 'visible',
        }

        // this.formSampleString = 'visible';
        // this.styleSampleString = "hidden";

    }

    handleChange = (e) => {
        if(e.target.id === "name") {
            this.setState({
                name: e.target.value,
            })
        }
        if(e.target.id === "email") {
            this.setState({
                email: e.target.value,
            })
        }
        if(e.target.id === "phone") {
            this.setState({
                phone: e.target.value,
            })
        }
        console.log(this.state.name, this.state.email, this.state.phone)
    }

    submitInfo = (e) => {
        e.preventDefault();

        let tempArray = [];
        tempArray.push(this.state.name);
        tempArray.push(this.state.email);
        tempArray.push(this.state.phone);

        this.setState({
            infoArray: tempArray
        })
        
        // this.changeSampleStrings();

        // this.setState({
        //     formDisplay: this.formSampleString,
        //     styleDisplay: this.styleSampleString
        // })

        console.log(this.state.infoArray);
    }

    // changeSampleStrings() {
    //     if(this.styleSampleString == 'hidden') {
    //         this.styleSampleString = 'infoForm';
    //         this.formSampleString = 'hidden';
    //     } else {
    //         this.styleSampleString = 'hidden';
    //         this.formSampleString = 'visible';   
    //     }
    // }

    render() {
        const { name, email, phone, infoArray, formDisplay } = this.state;

        return(
            <div className="generalInfo">
                {/* <InfoStyled infoArray={infoArray} display={styleDisplay}/> */}
                <InfoForm submitInfo={this.submitInfo} handleChange={this.handleChange} name={name} phone={phone} email={email}/>
            </div>
        )
    }
}

export default GeneralInfo;