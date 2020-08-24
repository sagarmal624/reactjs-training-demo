import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

export default withRouter(class AppWithRouterAccess extends Component {
    constructor(props) {
        super(props);
        this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
        this.props.history.push('/login')
    }

    render() {

        return (
            <Security issuer='https://dev-927611.okta.com/oauth2/default'
                      clientId='0oar8v3t31pwsAUGD4x6'
                      redirectUri={window.location.origin + '/implicit/callback'}
                      onAuthRequired={this.onAuthRequired}>
                <Route path='/' exact={true} component={Home}/>
                <SecureRoute path='/protected' component={Protected}/>
                <Route path='/login' render={() => <Login baseUrl='https://dev-927611.okta.com'/>}/>
                <Route path='/implicit/callback' component={LoginCallback}/>
            </Security>
        );
    }
});
