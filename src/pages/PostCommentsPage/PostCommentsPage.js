import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {commentsService} from '../../services';
import {Comment} from '../../components';

const PostCommentsPage = () => {

    const {id} = useParams();
    console.log(id);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getByPostId(id).then(({data}) => setComments(data));
    }, [id]);

    return (
        <div>
            {
                comments ? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                    : 'Loading....'
            }
        </div>
    );
};

export {PostCommentsPage};