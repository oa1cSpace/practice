import React from 'react';
import '../App.css';

class PasswordComponent extends React.Component {
    render() {

        const name = this.props.name;
        const type = this.props.type;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{name}</legend>
                <input type={type}
                       className="registrationField__input"
                       pattern="^[a-zA-Z0-9]+${4,60}"
                       required/>
            </fieldset>

        );
    }
}

export default PasswordComponent;