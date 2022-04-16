import React from 'react';

import css from './PostDetail.module.css';

const PostDetail = ({postDetails}) => {

    const {id, userId, title, body} = postDetails;

    return (
        <div className={css.postDetail}>
            <p><b>Id:</b> {id}</p>
            <p><b>UserId:</b> {userId}</p>
            <h3>Title: {title}</h3>
            <p><b>Body: </b>{body}</p>
        </div>
    );
};

export {PostDetail};