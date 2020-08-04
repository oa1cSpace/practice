import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImgComponent from "./img";
import PTag from "./PTag";
import AComponent from "./AComponent";

class HeaderContainer extends React.Component {
    state = {text: 'Hello React! ^_^'};

    constructor(props) {
        super(props);
        this.context = {};
    }

    render() {
        const {text} = this.state;
        return (
                <header className="App-header">
                    <ImgComponent logo={logo} alt={"lol"}/>
                    <PTag text={text} />

                    <AComponent
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        textA = 'Learn React'
                    />

                </header>
        );
    }
}

export default HeaderContainer;
