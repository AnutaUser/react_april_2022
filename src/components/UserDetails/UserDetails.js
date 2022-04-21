import React from 'react';
import {Link} from 'react-router-dom';

import css from './UserDetails.module.css';

const UserDetails = ({userDetails}) => {

    const {id, name, username, email, address, phone, website} = userDetails;

    return (
        <div className={css.UserDetails}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Address:</div>
            <div>Street: {address.street}</div>
            <div>Suite: {address.suite}</div>
            <div>City: {address.city}</div>
            <div>Zipcode: {address.zipcode}</div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <hr/>
            <Link to={'posts'}><button>user posts</button></Link>
        </div>
    );
};

export {UserDetails};
