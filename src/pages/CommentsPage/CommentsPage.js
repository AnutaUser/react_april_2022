import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {commentsService} from '../../services';
import {Comment} from '../../components';

const CommentsPage = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getById(id).then(({data}) => setComments(data));
    }, [id]);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {CommentsPage};