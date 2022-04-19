import React from 'react';
import {Outlet} from 'react-router-dom';

import css from './Layout.module.css';
import {Footer, Header} from '../components';

const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
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