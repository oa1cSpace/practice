import React from 'react';
import '../App.css';

class EmaileComponent extends React.Component {
    render() {
        const name = this.props.name;
        const type = this.props.type;
        const patternEmail = this.props.patternEmail;
        const placeholder = this.props.placeholder;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const form = this.props.form;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{name}</legend>
                <input name='email'
                       type={type}
                       className="registrationField__input"
                       pattern={patternEmail}
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       form={form}
                       required/>
            </fieldset>
        );
    }
}

export default EmaileComponent;