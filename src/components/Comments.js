import React, {useEffect, useState} from 'react';
import {Comment} from './Comment';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(comments => comments.json())
            .then(comments => setComments(comments))
    }, []);

    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};