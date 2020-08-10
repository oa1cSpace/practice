import React from 'react';


class NameComponent extends React.Component {
    render() {
        const text = this.props.text;
        const type = this.props.type;
        const pattern = this.props.pattern;
        const placeholder = this.props.placeholder;
        const onChange = this.props.onChange;
        const value = this.props.value;
        const name = this.props.name;
        const form = this.props.form;

        return (
                <div className=" d-flex clm-2 justify-content-between ">
                    <fieldset className="fieldset  border fname">
                        <legend className="registrationField__legend ml-2">{text}</legend>
                        <input
                            text={text}
                            type={type}
                            className="registrationField__input"
                            pattern={pattern}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            name={name}
                            form={form}
                        />
                    </fieldset>
                </div>
        );
    }
}

export default NameComponent;