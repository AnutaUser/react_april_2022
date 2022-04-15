import React from 'react';

import css from './Post.module.css';

const Post = ({post}) => {

    const {id, userId, title} = post;

    return (
        <div className={css.post}>
            <div>Id: {id}</div>
            <div>userId: {userId}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {Post};