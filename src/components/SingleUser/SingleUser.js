import React from 'react';

import css from './SingleUser.module.css';

const SingleUser = ({singleUser, setPostsById}) => {

    const {id, name, username, email, address, phone, website, company} = singleUser;

    console.log(id);

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
            <b className={css.singleUserAddress}>Geo:</b>
            <p className={css.singleUserAddressGeo}><b>Lat:</b> {address.geo.lat}</p>
            <p className={css.singleUserAddressGeo}><b>Lng:</b> {address.geo.lng}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Website:</b> {website}</p>
                <p><b>Company:</b></p>
            <p className={css.singleUserCompany}><b>Name:</b> {company.name}</p>
            <p className={css.singleUserCompany}><b>CatchPhrase:</b> {company.catchPhrase}</p>
            <p className={css.singleUserCompany}><b>Bs:</b> {company.bs}</p>
                <button className={css.singleUserBtn} onClick={()=>setPostsById(id)}>All Posts</button>
        </div>
    );
};

export {SingleUser};