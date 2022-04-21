import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

import css from './Header.module.css';
import {useAuth} from '../../hooks';

const Header = () => {

    const navigate = useNavigate();
    const {user, logOut} = useAuth();

    return (
        <div className={css.Header}>
            <NavLink to={'/'}>HOME</NavLink>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'posts'}>POSTS</NavLink>
            {user && <h2>{user}
                <button onClick={() => logOut(() => navigate('/'))}>Log Out</button>
            </h2>
            }
        </div>
    );
};

export {Header};