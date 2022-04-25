import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadUsers} from '../redux';

const Users = () => {

    const users = useSelector(({usersState}) => usersState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.id}. {user.name}</div>)
            }
        </div>
    );
};

export {Users};