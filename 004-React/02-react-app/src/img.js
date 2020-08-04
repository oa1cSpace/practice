import React from 'react';



class ImgComponent extends React.Component {

    render() {

        const logo = this.props.logo;
        const alt = this.props.alt;

        return (
            <img src={logo} className="App-logo" alt={alt}/>
        );
    }
}




export default ImgComponent;
