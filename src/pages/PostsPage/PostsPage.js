import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import css from './PostsPage.module.css';
import {postsService} from '../../services';
import {Post} from '../../components';

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            postsService.getByUserId(userId).then(({data}) => setPosts(data))
        } else
            postsService.getAll().then(({data}) => setPosts(data));
    }, [userId]);

    return (
        <div className={css.postsPage}>
            <div className={css.allPostsPage}>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};