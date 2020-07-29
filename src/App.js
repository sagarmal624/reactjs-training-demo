import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm'
import UserTable from './UserTable'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <RegistrationForm/>
                <UserTable/>
            </React.Fragment>
        );
    }
}

export default App;
