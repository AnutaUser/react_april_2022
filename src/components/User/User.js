import React from 'react';
import {Link} from 'react-router-dom';

import css from './User.module.css';
import {Button} from '../Button/Button';

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div className={css.user}>
            {/*{id}. {name} <Link to={`${id}`} state={user}><button>details</button></Link>*/}
            {id}. {name} <Button to={`${id}`} state={user}>go to user</Button>
        </div>
    );
};

export {User};