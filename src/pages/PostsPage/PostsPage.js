import React, {useEffect, useState} from 'react';

import css from './Posts.module.css';
import {postsService} from '../../services';
import {Post} from '../../components';
import {Outlet} from 'react-router-dom';

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data));
    }, []);

    return (
        <div className={css.posts}>
            <div className={css.postsAll}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
                <Outlet/>
        </div>
    );
};

export {PostsPage};