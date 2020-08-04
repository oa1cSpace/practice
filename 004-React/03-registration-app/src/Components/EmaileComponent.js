import React from 'react';
import '../App.css';

class EmaileComponent extends React.Component{


    render() {

        const name = this.props.name;
        const type = this.props.type;
        const placeholder = this.props.placeholder;

        return (
                <fieldset className="fieldset border">
                    <legend className="registrationField__legend ml-2">{name}</legend>
                    <input type={type}
                           className="registrationField__input"
                           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                           placeholder={placeholder}
                           required/>
                </fieldset>
        );
    }
}

export default EmaileComponent;