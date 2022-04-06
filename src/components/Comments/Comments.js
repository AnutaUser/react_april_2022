import React, {useEffect, useState} from 'react';

import {Comment} from '../Comment/Comment';
import {commentService} from '../../services';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
       commentService.getAllComments().then(value => setComments(value))
    }, []);

    return (
        <div className={'comments'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};