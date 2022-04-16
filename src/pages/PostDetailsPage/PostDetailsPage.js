import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {postsService} from '../../services';
import {PostDetail} from '../../components';
import css from './PostDetails.module.css';

const PostDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        if (!postDetails) {
            postsService.getById(id).then(({data}) => setPostDetails(data));
        } else {
            setPostDetails(state);
        }
    }, [id, state]);

    return (
        <div className={css.postDetails}>
            {postDetails && <PostDetail key={postDetails.id} postDetails={postDetails}/>}
        </div>
    );
};

export {PostDetailsPage};