import React, {useEffect, useState} from 'react';

import '../../App.css';
import {User} from '../User/User';
import {userService} from '../../services';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value));
    }, []);

    return (
        <div className={'users'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};