import React from 'react';
import CvHeader from './CvHeader';
import InfoForm from "./InfoForm"
import uniqid from "uniqid";

class GeneralInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            fileUrl: '',
            infoArray: [],
            id: uniqid(),
        }

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

        this.props.callbackFn(this.state.name, this.state.email, this.state.phone);

        console.log(this.state.infoArray);
    }

    handleFile = (e) => {
        this.setState({
            fileUrl: e.target.value
        })
        console.log(this.state.fileUrl)
    }

    render() {
        const { name, email, phone, infoArray, formDisplay, fileUrl } = this.state;

        return(
            <div className="generalInfo">
                <InfoForm submitInfo={this.submitInfo} handleChange={this.handleChange} handleFile={this.handleFile} name={name} phone={phone} email={email} fileUrl={fileUrl}/>
            </div>
        )
    }
}

export default GeneralInfo;