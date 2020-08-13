import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './StudentForm/RegistrationForm'
import UserTableStateless from './StudentTable/UserTableStateless'
import Header from './Header'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <RegistrationForm/>
                <UserTableStateless/>
            </React.Fragment>
        );
    }
}

export default App;
