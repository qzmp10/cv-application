import React from 'react';

class InfoForm extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { submitInfo } = this.props;
        const { handleChange } = this.props;
        const { info } = this.props;
        const { display } = this.props

        return(
            <form onSubmit={submitInfo} className={display}>
                    <h2 className = "formHeader">Enter your information</h2>
                    <div className='inputDiv'>
                      <label htmlFor="name">Name: </label>
                      <input 
                      onChange={handleChange}
                      value={info.name}
                      id="name" 
                      type="text"/>
                    </div>

                    <div className='inputDiv'>
                      <label htmlFor="phone">Phone number: </label>
                      <input 
                      onChange={handleChange}
                      value={info.phone}
                      id="phone" 
                      type="tel"/>  
                    </div>

                    <div className='inputDiv'>
                    <label htmlFor="email">E-mail: </label>
                    <input 
                    onChange={handleChange}
                      value={info.email}
                      id="email" 
                      type="email"/>
                    </div>   
                    <button className="submit" type="submit">Submit</button>
                </form>
        )

    }
}

export default InfoForm