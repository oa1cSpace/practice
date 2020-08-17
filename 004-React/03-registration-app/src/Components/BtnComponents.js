import React from 'react';

class BtnComponents extends React.Component {
  render() {
    const { text } = this.props;
    const { type } = this.props;
    const { onClick } = this.props;
    const { className } = this.props;
    const { value } = this.props;
    return (
      <button className={className} type={type} onClick={onClick} value={value}>{text}</button>
    );
  }
}

export default BtnComponents;
