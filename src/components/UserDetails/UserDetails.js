import React from 'react';

import css from './UserDetails.module.css';
import {Link} from 'react-router-dom';

const UserDetails = ({userDetails}) => {

    const {id, name, username, email, address, phone, website, company} = userDetails;

        return (
            <div className={css.userDetails}>
                    <h4>Id: {id}</h4>
                    <h3>Name: {name}</h3>
                    <p><b>Username:</b> {username}</p>
                    <p><b>Email:</b> {email}</p>
                    <p><b>Address:</b></p>
                    <p className={css.userDetailsAddress}><b>Street:</b> {address.street}</p>
                    <p className={css.userDetailsAddress}><b>Suite:</b> {address.suite}</p>
                    <p className={css.userDetailsAddress}><b>City:</b> {address.city}</p>
                    <p className={css.userDetailsAddress}><b>Zipcode:</b> {address.zipcode}</p>
                    <p className={css.userDetailsAddress}><b>Geo:</b></p>
                    <p className={css.userDetailsAddressGeo}><b>Lat:</b> {address.geo.lat}</p>
                    <p className={css.userDetailsAddressGeo}><b>Lng:</b> {address.geo.lng}</p>
                    <p><b>Phone:</b> {phone}</p>
                    <p><b>Website:</b> {website}</p>
                    <p><b>Company:</b></p>
                    <p className={css.userDetailsAddress}><b>Name:</b> {company.name}</p>
                    <p className={css.userDetailsAddress}><b>CatchPhrase:</b> {company.catchPhrase}</p>
                    <p className={css.userDetailsAddress}><b>Bs:</b> {company.bs}</p>
                    <Link to={'posts'}><button>User posts</button></Link>
            </div>
        );
};

export {UserDetails};