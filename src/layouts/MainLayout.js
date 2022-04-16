import React from 'react';

import css from './MainLayout.module.css';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';

const MainLayout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className={css.mainLayout}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </div>
            <hr/>
            <div className={css.mainLayoutNav}>
                <button onClick={() => navigate(-1)}>&#8592;</button>
                <button onClick={() => navigate(1)}>&#8594;</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};