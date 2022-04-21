import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {postsService} from '../../services';
import {PostDetails} from '../../components';

const PostDetailsPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        if (!state) {
            postsService.geById(id).then(({data}) => setPostDetails(data));
        } else {
            setPostDetails(state);
        }
    }, [id, state]);

    return (
        <div>
            <div>
                {
                postDetails ? <PostDetails key={postDetails.id} postDetails={postDetails}/>
                    : 'Loading.......'
            }
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};