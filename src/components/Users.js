import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadUsers} from '../redux/actions.creator';

const Users = () => {

    const users = useSelector(({usersState}) => usersState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    return (
        <div>
            {
                users.map(value => <div key={value.id}>{value.id}. {value.name}</div>)
            }
        </div>
    );
};

export {Users};