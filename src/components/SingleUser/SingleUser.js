import React from 'react';

import css from './SingleUser.module.css';

const SingleUser = ({singleUser}) => {

    const {id, name, username, email, address, phone, website, company} = singleUser;

    return (
        <div className={css.singleUser}>
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Address:</b></p>
            <p className={css.singleUserAddress}><b>Street:</b> {address.street}</p>
            <p className={css.singleUserAddress}><b>Suite:</b> {address.suite}</p>
            <p className={css.singleUserAddress}><b>City:</b> {address.city}</p>
            <p className={css.singleUserAddress}><b>Zipcode:</b> {address.zipcode}</p>
            <p className={css.singleUserAddress}><b>Geo:</b></p>
            <p className={css.singleUserAddressGeo}><b>Lat:</b> {address.geo.lat}</p>
            <p className={css.singleUserAddressGeo}><b>Lng:</b> {address.geo.lng}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Website:</b> {website}</p>
            <p><b>Company:</b></p>
            <p className={css.singleUserAddress}><b>Name:</b> {company.name}</p>
            <p className={css.singleUserAddress}><b>CatchPhrase:</b> {company.catchPhrase}</p>
            <p className={css.singleUserAddress}><b>Bs:</b> {company.bs}</p>
        </div>
    );
};

export {SingleUser};