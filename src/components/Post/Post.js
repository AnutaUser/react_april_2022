import React from 'react';
import {Link} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div className={css.post}>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <Link to={`${id}`} state={post}><button className={css.postBtn}>details</button></Link>
        </div>
    );
};

export {Post};