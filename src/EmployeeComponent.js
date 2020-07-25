import React, {useState} from 'react'
import {Button} from "reactstrap";


const EmployeeComponent = (props) => {
    const [name, setName] = useState("test-> calling from employee");
    const onClick = (name) => {
        setName(name);
    };
    const onChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            {name}
            <input type={"text"} onChange={onChange} name={"test"}/>
            <Button outline color="primary" onClick={e => {
                onClick("test")
            }}>Apply</Button>{' '}
        </div>
    );
};

export default EmployeeComponent;