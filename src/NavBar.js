import React from 'react'
import {Button} from "reactstrap";
import history from './history'
import {useFriendStatus} from "./CustomHooks";

const NavBar = () => {
    const isOnline = useFriendStatus("sagar");
    //     // useEffect(() => {
    //     //     //console.log(isOnline);
    //     // });

    const onClick = (e) => {
        console.log(isOnline);

        // e.stopPropagation();
        // e.preventDefault();
        //history.push("/user-table?test=sagar");
        //alert("test");
        console.log(history.location);
        //history.goBack();
        // window.location.href="/user-table";
    };

    return (<div>
        <a href={"/signup"} className={"btn btn-success"}>Sign Up</a>
        <Button className={"btn btn-success"} onClick={onClick}>UserTable</Button>
    </div>);
};

export default NavBar;