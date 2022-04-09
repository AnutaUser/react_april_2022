import React from 'react';

import css from './Post.module.css';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={css.post}>
            <p>UserID: {userId}</p>
            <p>ID: {id}</p>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};
