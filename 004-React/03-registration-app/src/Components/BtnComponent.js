import React from 'react';
import '../App.css';

class BtnComponent extends React.Component {
    render() {

        const textBtn1 = this.props.textBtn1;
        const textBtn2 = this.props.textBtn2;
        const typeBtn1 = this.props.typeBtn1;
        const typeBtn2 = this.props.typeBtn2;

        return (
            <div>
                <button className="btn__Registration" type={typeBtn1}>{textBtn1}</button>
                <button className="btn__Clear " type={typeBtn2}>{textBtn2}</button>
            </div>
        );
    }
}

export default BtnComponent;