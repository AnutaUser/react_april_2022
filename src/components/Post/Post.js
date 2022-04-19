import React from 'react';
import {Link} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post, flag}) => {

    const {id, title} = post;

    return (
        <div className={css.post}>
            <div>
                {id}. {title}
            </div>
            {
                flag && <Link to={`${id}`} state={post}><button>Post detail</button></Link>
            }
        </div>
    );
};

export {Post};