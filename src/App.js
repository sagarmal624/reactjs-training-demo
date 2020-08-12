import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm'
import UserTableStateless from './UserTableStateless'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <RegistrationForm/>
                <UserTableStateless/>
            </React.Fragment>
        );
    }
}

export default App;
