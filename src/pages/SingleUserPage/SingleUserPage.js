import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import css from './SingleUser.module.css';
import {usersService} from '../../services';
import {SingleUser} from '../../components';

const SingleUserPage = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        if (!state) {
            usersService.getById(id).then(({data}) => setSingleUser(data));
        } else {
            setSingleUser(state)
        }
    }, [id, state]);

    return (
        <div className={css.singleUserPage}>
            {singleUser && <SingleUser key={singleUser.id} singleUser={singleUser}/>}
        </div>
    );
};

export {SingleUserPage};