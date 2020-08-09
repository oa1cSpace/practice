import React from 'react';
import '../App.css';

class EmaileComponent extends React.Component {
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
                <input name='email'
                       text={text}
                       className="registrationField__input"
                       placeholder={placeholder}
                       value={value}
                       onChange={onChange}
                       type={type}
                       form={form}
                />
            </fieldset>
        );
    }
}

export default EmaileComponent;