import React, {useEffect, useState} from 'react';

import css from './UsersPage.module.css';
import {usersService} from '../../services';
import {User} from '../../components';
import {Outlet} from 'react-router-dom';

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={css.usersPage}>
            <div className={css.usersPageMain}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};