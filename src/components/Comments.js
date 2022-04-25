import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadComments} from '../redux';

const Comments = () => {

    const comments = useSelector(({commentsState}) => commentsState);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadComments());
    }, []);

    return (
        <div>
            {
                comments.map(comment => <div key={comment.id}>{comment.id}. {comment.name}</div>)
            }
        </div>
    );
};

export {Comments};