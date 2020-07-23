import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './Student'
import EmployeeComponent from './EmployeeComponent'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Student/>
                <EmployeeComponent/>
            </React.Fragment>
        );
    }
}

export default App;
