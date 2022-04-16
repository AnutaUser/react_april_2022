import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.comment}>
            <p>PostId: {postId}</p>
            <p>Id: {id}</p>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};