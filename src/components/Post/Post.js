import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <div>
                {id}. {title}
            </div>
            <Link to={`${id}`} state={post}><button>post details</button></Link>
        </div>
    );
};

export {Post};