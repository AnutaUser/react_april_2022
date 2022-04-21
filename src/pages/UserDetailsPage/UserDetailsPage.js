import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {usersService} from '../../services';
import {UserDetails} from '../../components';

const UserDetailsPage = () => {

    const {userId} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if(!state) {
            usersService.getBuId(userId).then(({data}) => setUserDetails(data))
        } else {
            setUserDetails(state);
        }
    }, [userId, state]);

    return (
        <div>
            <div>
                {userDetails && <UserDetails key={userDetails.id} userDetails={userDetails}/>}
            </div>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};