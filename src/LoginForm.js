import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", emailError: '', passwordError: ''}
    }

    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => this.validateForm(name, value))
    };
    validateForm = (name, value) => {
        let {emailError, passwordError} = this.state;
        switch (name) {
            case 'email':
                if (value.length < 3) {
                    emailError = "Email Id is invalid.Please try with valid email id";
                } else
                    emailError = "";
                break;
            case 'password':
                if (value.length < 5) {
                    passwordError = "Please enter Strong password. At least 6 char should be there";
                } else {
                    passwordError = "";
                }
                break;
        }
        this.setState({emailError: emailError, passwordError: passwordError})
    };
    // onChangeEmailHandler = (e) => {
    //     this.setState({'email': e.target.value})
    // }
    // onChangePasswordHandler = (e) => {
    //     this.setState({'password': e.target.value})
    // }
    onSubmit = () => {
        const {email, password} = this.state;
        console.log(this.state.emailError, this.state.passwordError);
        // alert(email + "=" + password)
    };

    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.emailError &&
                            <Label className={"text-red"}>{this.state.emailError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword"
                               onChange={this.onChangeHandler} placeholder="password placeholder"/>
                        {
                            this.state.passwordError &&
                            <Label className={"text-red"}>{this.state.passwordError}</Label>
                        }
                    </FormGroup>
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}