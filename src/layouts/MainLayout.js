import React from 'react';

import css from './MainLayout.module.css';
import {NavLink, Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className={css.mainLayout}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};