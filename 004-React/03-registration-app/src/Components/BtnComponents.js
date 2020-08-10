import React from 'react';

class BtnComponents extends React.Component {
    render() {
        const text = this.props.text;
        const type = this.props.type;
        const onClick = this.props.onClick;
        const className = this.props.className;
        const value = this.props.value;
        return (
            <button className={className} type={type} onClick={onClick} value={value}>{text}</button>
        );
    }
}

export default BtnComponents;