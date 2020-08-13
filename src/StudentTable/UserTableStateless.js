import React, {useEffect, useState} from 'react';
import {Button, Table} from 'reactstrap';
import EditUser from "../EditUser";
import {getStudentList} from './redux/selectors.js'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import * as actions from './redux/actions';
import axios from 'axios'

const UserTableStateless = (props) => {

    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        props.getStudentList();
    }, []);

    const users = props.studentList && props.studentList.data ? props.studentList.data : [];

    const users1 = users.map(user => {
        return <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td><Button className="btn btn-success" onClick={e => {
                setModal(!modal);
                setUser(user);
            }}>Edit</Button>{' '}
                <Button className="btn btn-danger" onClick={() => {
                    axios.delete("http://localhost:8080/api/v1/user/delete/" + user.id).then(function (response) {
                        alert(response.data.message);
                    })
                }
                }>Delete</Button></td>
        </tr>
    });

    return (

        <React.Fragment>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users1}
                </tbody>
            </Table>
            <EditUser user={user} modal={modal}/>
        </React.Fragment>

    );
};

export const mapStateToProps = createStructuredSelector({
    studentList: getStudentList,
});

const mapDispatchToProps = dispatch => {
    return {
        getStudentList: params => dispatch(actions.getStudentList(params)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTableStateless);
