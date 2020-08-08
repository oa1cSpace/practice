import React from 'react';
import '../App.css';

class PasswordComponent extends React.Component {
    render() {
        const name = this.props.name;
        const type = this.props.type;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const form = this.props.form;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{name}</legend>
                <input name='password'
                       type={type}
                       className="registrationField__input"
                       value={value}
                       onChange={onChange}
                       form={form}
                />
            </fieldset>
        );
    }
}

export default PasswordComponent;