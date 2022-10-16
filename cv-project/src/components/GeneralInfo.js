import React from 'react';

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
        console.log(this.state.infoArray)
    }

    render() {
        const { info, infoArray } = this.state;

        return(
            <div className="generalInfo">
                <form onSubmit={this.submitInfo} className="form generalInfoForm">
                    <h2 className = "formHeader">Enter your information</h2>
                    <div className='inputDiv'>
                      <label htmlFor="name">Name: </label>
                      <input 
                      onChange={this.handleChange}
                      value={info.name}
                      id="name" 
                      type="text"/>
                    </div>

                    <div className='inputDiv'>
                      <label htmlFor="phone">Phone number: </label>
                      <input 
                      onChange={this.handleChange}
                      value={info.phone}
                      id="phone" 
                      type="tel"/>  
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                    onChange={this.handleChange}
                      value={info.email}
                      id="email" 
                      type="email"/>
                    </div>   
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;