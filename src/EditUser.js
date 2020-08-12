import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Form} from 'reactstrap';

const EditUser = (props) => {
    const {
        className,
    } = props;

    const [modal, setModal] = useState(props.modal);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal isOpen={props.modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit User</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleFirstName">FirstName</Label>
                            <Input type="text" name="firstName" id="exampleFirstName" value = {props.user? props.user.firstName:""} placeholder="with a placeholder"/>

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleLastName">LastName</Label>
                            <Input type="text" name="lastName" id="exampleLastName" value = {props.user? props.user.lastName:""} placeholder="with a placeholder"/>

                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" value = {props.user? props.user.email:""} placeholder="with a placeholder"/>

                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" value = {props.user? props.user.password:""}  placeholder="password placeholder"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditUser;
