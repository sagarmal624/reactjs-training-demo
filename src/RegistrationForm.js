import React, {Component} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import axios from 'axios';

export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formError: false,
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: ''
        }
    }

    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => this.validateForm(name, value))
    };

    onSubmit = () => {
        const {firstName, lastName, email, password, formError} = this.state;
        console.log(this.state.emailError, this.state.passwordError, this.state.firstNameError, this.state.lastNameError);
        if (!formError) {

            axios.post("http://localhost:8080/api/v1/user/save", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }).then(function (response) {
                console.log(response);
            })
        }
        // alert(formError);

    };
    isValidForm = () => {
        const {emailError, passwordError, firstNameError, lastNameError} = this.state;
        if (emailError || passwordError || firstNameError || lastNameError) {
            this.setState({formError: true})
        } else
            this.setState({formError: false})
    };
    validateForm = (name, value) => {
        let {emailError, passwordError, firstNameError, lastNameError} = this.state;
        const validEmailRegex =
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'lastName':
                if (value.length < 3) {
                    lastNameError = "Last Name is invalid.Please try with Name greater than 3 characters";
                } else
                    lastNameError = "";
                break;
            case 'firstName':
                if (value.length < 3) {
                    firstNameError = "First Name is invalid.Please try with Name greater than 3 characters";
                } else
                    firstNameError = "";
                break;
            case 'email':
                if (validEmailRegex.test(value)) {
                    emailError = "";
                } else {
                    emailError = "Email Id is invalid.Please try with valid email id";
                }
                break;
            case 'password':
                if (value.length < 5) {
                    passwordError = "Please enter Strong password. At least 6 char should be there";
                } else {
                    passwordError = "";
                }
                break;
        }
        this.setState({
            emailError: emailError,
            passwordError: passwordError,
            firstNameError: firstNameError,
            lastNameError: lastNameError
        }, () => this.isValidForm())

    }

    render() {
        return (
            <React.Fragment>
                <h2 id={"heading"}>Student Registration Form</h2>
                <Form>
                    <FormGroup>
                        <Label for="exampleFirstName">FirstName</Label>
                        <Input type="text" name="firstName" id="exampleFirstName" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.firstNameError &&
                            <Label className={"text-red"}>{this.state.firstNameError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLastName">LastName</Label>
                        <Input type="text" name="lastName" id="exampleLastName" onChange={this.onChangeHandler}
                               placeholder="with a placeholder"/>
                        {
                            this.state.lastNameError &&
                            <Label className={"text-red"}>{this.state.lastNameError}</Label>
                        }
                    </FormGroup>
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
                        <Input type="password" name="password" id="examplePassword" onChange={this.onChangeHandler}
                               placeholder="password placeholder"/>
                        {
                            this.state.passwordError &&
                            <Label className={"text-red"}>{this.state.passwordError}</Label>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={this.onSubmit}>Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment>
        )
    }
}