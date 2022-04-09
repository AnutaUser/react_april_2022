import React from 'react';

import css from './User.module.css';

const User = ({user, setSingleUser, setPostsById}) => {

    const {id, name, username} = user;

    return (
        <div className={css.user}>

            {id}. {name} -- {username}

            <button onClick={() => {
                setSingleUser(user)
                setPostsById(false)
            }} className={css.btnUser}>details</button>

        </div>
    );
}

export {User};