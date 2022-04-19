import React from 'react';
import {Link} from 'react-router-dom';

const UserDetails = ({userDetails}) => {

    const {id, name, username, email} = userDetails;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <hr/>
            <Link to={'posts'}><button>user posts</button></Link>
        </div>
    );
};

export {UserDetails};