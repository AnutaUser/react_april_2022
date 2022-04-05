import React, {useEffect, useState} from 'react';

import {Post} from './Post';
import '../App.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.json())
            .then(posts => setPosts(posts))
    }, []);

    return (
        <div className={'posts'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};