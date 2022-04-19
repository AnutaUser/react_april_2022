import React from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';

import css from './MainLayout.module.css';

const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className={css.mainLayout}>
                <NavLink to={'/home'}>HOME</NavLink>
                <NavLink to={'/users'}>USERS</NavLink>
                <NavLink to={'/posts'}>POSTS</NavLink>
            </div>
            <div className={css.mainLayoutNav}>
                <button onClick={() => navigate(-1)}>&#8592;</button>
                <button onClick={() => navigate(1)}>&#8594;</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};