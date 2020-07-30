import React from 'react'
import {Button} from "reactstrap";
import {useHistory} from "react-router-dom";

const NavBar = () => {
    let history = useHistory();
    const onClick = (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        console.log("History", history);
        // history.push("/user-table")
    };

    return (<div>
        <a href={"/signup"} className={"btn btn-success"}>Sign Up</a>
        <Button className={"btn btn-success"} onClick={() => {
            console.log("His11tory", history);
        }}>UserTable</Button>
    </div>);
};

export default NavBar;