import React from 'react';
import {useDispatch} from 'react-redux';

import {usersActions} from '../redux';

const User = ({user:{id, name}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            {id} -- {name} <button onClick={()=> dispatch(usersActions.dellUser({id}))}>delete</button>
        </div>
    );
};

export {User};