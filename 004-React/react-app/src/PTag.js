import React from 'react';



class PTag extends React.Component {

    render() {

        const text = this.props.text;


        return (
           <p>{text}</p>
        );
    }
}




export default PTag;
