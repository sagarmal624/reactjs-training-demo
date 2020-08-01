import React, {useEffect, useState} from 'react'


const useFriendStatus = (name) => {
    const [online, setOnline] = useState(false);
    useEffect(() => {
        setOnline(name == 'sagar' ? true : false);
    }, []);
    return online;
};
export {useFriendStatus}