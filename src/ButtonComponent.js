import React from 'react'
import {Button} from 'reactstrap';


const ButtonComponent = ({btnName, primaryColor}) => {
    return (
        <div>
            <Button outline color="primary">{btnName}</Button>{' '}
            <Button outline color="secondary">{primaryColor}</Button>{' '}
            <Button outline color="success">success</Button>{' '}
            <Button outline color="info">info</Button>{' '}
            <Button outline color="warning">warning</Button>{' '}
            <Button outline color="danger">danger</Button>
        </div>
    );
};

export default ButtonComponent;