import React from 'react';
import '../App.css';

class NameComponent extends React.Component {
    render() {

        const fName = this.props.fName;
        const lName = this.props.lName;
        const type = this.props.type;
        const patternName = this.props.patternName;
        const placeholderFName = this.props.placeholderFName;
        const placeholderLName = this.props.placeholderLName;

        return (
            <div>
                <div className=" d-flex clm-2 justify-content-between">

                    <fieldset className="fieldset  border fname">
                        <legend className="registrationField__legend ml-2">{fName}</legend>
                        <input type={type} className="registrationField__input "
                               pattern={patternName}
                               placeholder={placeholderFName} required/>
                    </fieldset>

                    <fieldset className="fieldset  border lname">
                        <legend className="registrationField__legend ml-2">{lName}</legend>
                        <input type={type}
                               className="registrationField__input "
                               pattern={patternName}
                               placeholder={placeholderLName}
                               required/>
                    </fieldset>

                </div>

            </div>
        );
    }
}

export default NameComponent;