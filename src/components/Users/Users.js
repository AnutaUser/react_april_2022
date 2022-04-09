import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import {userService} from '../../services';
import {User} from '../User/User';

const Users = ({setSingleUser, setPostsById}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, []);

    // const getUserId = async (id) => {
    //     const {data} = await userService.getUserById(id);
    //     setUser(data);
    // };

    return (
        <div className={css.users}>
            <div>{users.map(user => <User key={user.id} user={user} setSingleUser={setSingleUser} setPostsById={setPostsById}/>)}</div>
            {/*<div>{user && <div>{user.name} {user.username}</div>}</div>*/}
        </div>
    );
};

export {Users};