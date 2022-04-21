import React from 'react';
import {Link} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post, flag}) => {

    const {id, title} = post;

    return (
        <div className={css.Post}>
            <div>
                {id}. {title}
            </div>
            {flag && <Link to={`${id}`} state={post}><button>post details</button></Link>}
        </div>
    );
};

export {Post};