import React, {useEffect, useState} from 'react';

import {postService} from '../../services';
import {Post} from '../Post/Post';
import css from './Posts.module.css';

const Posts = ({userId}) => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }, []);

    return (
        <div className={css.posts}>
            {
                posts
                    ? posts.map((post) => <Post key={post.id} post={post}/>)
                    : 'Loading....'
            }
        </div>
    )
};

export {Posts};