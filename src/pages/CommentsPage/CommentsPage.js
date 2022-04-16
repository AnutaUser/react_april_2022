import React, {useEffect, useState} from 'react';

import css from './Comments.module.css';
import {commentsService} from '../../services';
import {Comment} from '../../components';

const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    }, []);

    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};