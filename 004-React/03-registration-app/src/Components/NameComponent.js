import React from 'react';
import '../App.css';

class NameComponent extends React.Component {
    render() {
        const fName = this.props.fName;
        const type = this.props.type;
        const patternName = this.props.patternName;
        const placeholderName = this.props.placeholderName;
        const onChange = this.props.onChange;
        const value = this.props.value;
        const name = this.props.name;
        const form = this.props.form;

        return (
                <div className=" d-flex clm-2 justify-content-between ">
                    <fieldset className="fieldset  border fname">
                        <legend className="registrationField__legend ml-2">{fName}</legend>
                        <input
                            fName={fName}
                            type={type}
                            className="registrationField__input"
                            patternName={patternName}
                            placeholderName={placeholderName}
                            onChange={onChange}
                            value={value}
                            name={name}
                            form={form}
                            required
                        />
                    </fieldset>
                </div>
        );
    }
}

export default NameComponent;