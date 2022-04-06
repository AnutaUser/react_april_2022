import React, {useEffect, useState} from 'react';

import {Post} from '../Post/Post';
import '../../App.css';
import {postService} from '../../services';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAllPosts().then(value => value.slice(0, 10)).then(value => setPosts(value))
    }, []);

    return (
        <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};