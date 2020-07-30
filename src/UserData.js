import React from 'react'
import {useParams} from "react-router-dom";


const UserData = () => {
    const {id} = useParams();

    return (<div>{id}</div>)
};
export default UserData;