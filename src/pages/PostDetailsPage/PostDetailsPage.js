import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import css from './PostDetailsPage.module.css';
import {postsService} from '../../services';
import {PostDetails} from '../../components';

const PostDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        if (!state) {
            postsService.getById(id).then(({data}) => setPostDetails(data));
        } else {
            setPostDetails(state);
        }
    }, [id, state]);

    return (
        <div className={css.postDetailsPage}>
            {postDetails && <PostDetails key={postDetails.id} postDetails={postDetails}/>}
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};