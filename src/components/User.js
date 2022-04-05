import React from 'react';

const User = ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'user'}>
            <h4>Id: {id}</h4>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address:</p>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            <p>Geo:</p>
            <p>Lat: {address.geo.lat}</p>
            <p>Lng: {address.geo.lng}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company:</p>
            <p>Name: {company.name}</p>
            <p>CatchPhrase: {company.catchPhrase}</p>
            <p>Bs: {company.bs}</p>
        </div>
    );
};

export {User};