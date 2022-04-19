import React from 'react';
import {Link} from 'react-router-dom';

import css from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {

    const {userId, id, title, body} = postDetails;

    return (
        <div className={css.postDetails}>
            <p><b>UserId:</b> {userId}</p>
            <p><b>ID:</b> {id}</p>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
            <Link to={'comments'}><button>comments</button></Link>
        </div>
    );
};

export {PostDetails};