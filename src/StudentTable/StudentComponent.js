import React from "react";

const StudentComponent = (props) => {
    return <tr>
        <td>{props.user.id}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td>{props.user.password}</td>
        <td> edit</td>
    </tr>
};
export default StudentComponent;
