import React from 'react';



class AComponent extends React.Component {

    render() {

        const className = this.props.classname;
        const href = this.props.href;
        const target = this.props.target;
        const rel = this.props.rel;
        const textA = this.props.textA;

        return (
            <a
                className= {className}
                href={href}
                target={target}
                rel={rel}

            >
                {textA}
            </a>
        );
    }
}




export default AComponent;
