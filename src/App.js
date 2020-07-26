import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <LoginForm/>
            </React.Fragment>
        );
    }
}

export default App;
