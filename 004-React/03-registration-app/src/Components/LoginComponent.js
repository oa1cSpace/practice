import React from 'react';
import '../App.css';

class LoginComponent extends React.Component {
    render() {

        const name = this.props.name;
        const type = this.props.type;
        const patternLogin = this.props.patternLogin;
        const placeholder = this.props.placeholder;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{name}</legend>
                <input type={type}
                       className="registrationField__input"
                       pattern={patternLogin}
                       placeholder={placeholder}
                       required/>
            </fieldset>
        );
    }
}

export default LoginComponent;