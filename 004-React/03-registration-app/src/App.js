import React from 'react';
import './App.css';
import './Containers/Container';
import Container from "./Containers/Container";

class App extends React.Component {

    render() {
        return (
            <div className="App">

                <Container/>

            </div>
        );
    }
}

export default App;