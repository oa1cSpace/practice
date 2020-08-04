import React from 'react';
import '../App.css';

class NameComponent extends React.Component {
    render() {

        const fName = this.props.fName;
        const lName = this.props.lName;
        const type = this.props.type;
        const placeholder1 = this.props.placeholder1;
        const placeholder2 = this.props.placeholder2;

        return (
            <div>
                <fieldset className="fieldset registrationField__fname border">
                    <legend className="registrationField__legend ml-2">{fName}</legend>
                    <input type={type} className="registrationField__input fname"
                           pattern="^[A-Za-zА-Яа-яЁё]{4,60}"
                           placeholder={placeholder1} required/>
                </fieldset>

                <fieldset className="fieldset registrationField__lname border">
                    <legend className="registrationField__legend ml-2">{lName}</legend>
                    <input type={type}
                           className="registrationField__input lname"
                           pattern="^[A-Za-zА-Яа-яЁё]{4,60}"
                           placeholder={placeholder2}
                           required/>
                </fieldset>
            </div>
        );
    }
}

export default NameComponent;