import React, {useEffect, useState} from 'react';

import {User} from './User';
import '../App.css';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => users.json())
            .then(users => setUsers(users));
    }, []);

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};