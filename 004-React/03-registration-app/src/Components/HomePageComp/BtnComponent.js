import React from 'react';

class BtnComponent extends React.Component {
    render() {
        const value = this.props.value;
        const className = this.props.className;
        const type = this.props.type;
        const text = this.props.text;
        const onClick = this.props.onClick;
        const onSubmit = this.props.onSubmit;

        return (
            <button type={type} className={className} onClick={onClick} onSubmit={onSubmit}
                    value={value}>{text}</button>
        );
    }
};

export default BtnComponent;