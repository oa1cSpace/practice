import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegistrationCont from './Containers/RegistrationCont';
import Login from './Login';
import HomePageCont from './Containers/HomePageContainer';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/registration" component={RegistrationCont}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/home" component={HomePageCont}/>
            </Router>
        );
    }
}

export default App;