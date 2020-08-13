import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Containers/RegistrationCont';
import RegistrationCont from "./Containers/RegistrationCont";
import './Login'
import Login from "./Login";
import HomePageCont from "./Containers/HomePageCont";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact={true} path='/registration' component={RegistrationCont}/>
                <Route exact={true} path='/login' component={Login}/>
                <Route exact={true} path='/home' component={HomePageCont}/>
            </Router>
        );
    }
}

export default App;