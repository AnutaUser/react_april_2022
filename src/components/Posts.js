import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadPosts} from '../redux';

const Posts = () => {

    const posts = useSelector(({postsState}) => postsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
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