import React from 'react';
import '../App.css';

class PComponent extends React.Component{
    render() {
        const text = this.props.text;
        const className = this.props.className;

        return(
            <p className={className}>{text}</p>

        );
    }
}

export default PComponent;