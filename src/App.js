import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpForm from "./EmpForm"

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar btnName={this.props.btnName} name={"sagar"}/>
                <EmpForm/>
            </React.Fragment>
        );
    }
}

export default App;
