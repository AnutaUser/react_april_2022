import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from 'react-router-dom';

import {usersService} from '../../services';
import {UserDetails} from '../../components';
import css from './UserDetailsPage.module.css';

const UserDetailsPage = () => {

    const {userId} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (!state) {
            usersService.getById(userId).then(({data}) => setUserDetails(data));
        } else {
            setUserDetails(state);
        }
    }, [userId, state]);

    return (
        <div className={css.userDetailsPage}>
            <div>{userDetails && <UserDetails key={userDetails.id} userDetails={userDetails}/>}</div>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};