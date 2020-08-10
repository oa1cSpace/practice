import React from 'react';


class PasswordComponent extends React.Component {
    render() {
        const text = this.props.text;
        const type = this.props.type;
        const value = this.props.value;
        const onChange = this.props.onChange;
        const form = this.props.form;
        const name = this.props.name;

        return (
            <fieldset className="fieldset border">
                <legend className="registrationField__legend ml-2">{text}</legend>
                <input text={text}
                       type={type}
                       className="registrationField__input"
                       value={value}
                       onChange={onChange}
                       form={form}
                       name={name}
                />
            </fieldset>
        );
    }
}

export default PasswordComponent;