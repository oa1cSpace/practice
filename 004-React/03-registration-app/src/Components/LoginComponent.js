import React from 'react';

class LoginComponent extends React.Component {
    render() {

        const text = this.props.text;
        const name = this.props.name;
        const type = this.props.type;
        const placeholder = this.props.placeholder;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const form = this.props.form;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{text}</legend>
                <input
                       text={text}
                       name={name}
                       type={type}
                       className="registrationField__input"
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       form={form}
                />
            </fieldset>
        );
    }
}

export default LoginComponent;