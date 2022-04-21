import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import css from './Layout.module.css';
import {Footer, Header} from '../components';

const Layout = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Header/>
            </div>

            <div className={css.Navigate}>
                <button onClick={() => navigate(-1)}>&#8592;</button>
                <button onClick={() => navigate(1)}>&#8594;</button>
            </div>

            <div className={css.Outlet}>
                <Outlet/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
};

export {Layout};