import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm'
import UserTable from './UserTable'
import NotFound from './NotFound'
import UserData from './UserData'
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                < Router>
                    < Switch>
                        < Route
                            exact
                            path="/signup">
                            < RegistrationForm/>
                        </Route>
                        <Route exact path="/user-table">
                            <UserTable/>
                        </Route>
                        < Route
                            exact
                            path="/user-data/:id">
                            < UserData/>
                        </Route>

                        <Route path="*">
                            <NotFound/>
                        </Route>

                    </Switch>
                </Router>
            </React.Fragment>
        )
            ;
    }
}

export default App;
