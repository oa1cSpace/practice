import React from 'react';
import '../App.css';

class BtnComponents extends React.Component {
    render() {
        const textBtn = this.props.textBtn;
        const typeBtn = this.props.typeBtn;
        const onClick = this.props.onClick;
        const className = this.props.className;
        return (
            <button className={className} typeBtn={typeBtn} onClick={onClick}>{textBtn}</button>
        );
    }
}

export default BtnComponents;