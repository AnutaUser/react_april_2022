import React from 'react';
import {Link} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div className={css.user}>
            {id}. {name} <Link to={`${id}`} state={user}><button>details</button></Link>
        </div>
    );
};

export {User};