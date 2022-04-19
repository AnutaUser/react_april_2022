import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './UsersPage.module.css';
import {usersService} from '../../services';
import {User} from '../../components';

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={css.UsersPage}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>

            <Outlet/>
        </div>
    );
};

export {UsersPage};