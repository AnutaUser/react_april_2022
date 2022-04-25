import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadPosts} from '../redux/actions';

const Posts = () => {

    const posts = useSelector(({postsState}) => postsState);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                loadPosts(posts, dispatch);
            });
    }, []);

    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.id}. {post.title}</div>)
            }
        </div>
    );
};


export {Posts};