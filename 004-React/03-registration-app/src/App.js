import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import './Containers/RegistrationContainer';
import RegistrationContainer from "./Containers/RegistrationContainer";
import './Login'
import Login from "./Login";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact={true} path='/registration' component={RegistrationContainer}/>
                <Route exact={true} path='/login' component={Login}/>
            </Router>
        );
    }
}

export default App;