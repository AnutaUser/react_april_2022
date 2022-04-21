import React from 'react';
import {Link} from 'react-router-dom';

import css from './PostDetails.module.css';

const PostDetails = ({postDetails}) => {

    const {userId, id, title, body} = postDetails;

    return (
        <div className={css.PostDetails}>
            <div>
                <p>UserId: {userId}</p>
                <p>Id: {id}</p>
                <h3>Title: {title}</h3>
                <p>Body: {body}</p>
            </div>
            <Link to={'comments'}><button>comments</button></Link>
        </div>
    );
};

export {PostDetails};