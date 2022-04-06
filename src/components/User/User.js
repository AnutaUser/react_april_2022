import React from 'react';

const User = ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'user'}>
            <h4>Id: {id}</h4>
                <h3>Name: {name}</h3>
            <p><b>Username:</b> {username}</p>
            <p><b>Email:</b> {email}</p>
            <b>Address:</b>
            <p className={'userAddress'}><b>Street:</b> {address.street}</p>
            <p className={'userAddress'}><b>Suite:</b> {address.suite}</p>
            <p className={'userAddress'}><b>City:</b> {address.city}</p>
            <p className={'userAddress'}><b>Zipcode:</b> {address.zipcode}</p>
            <b className={'userAddress'}>Geo:</b>
            <p className={'userAddressGeo'}><b>Lat:</b> {address.geo.lat}</p>
            <p className={'userAddressGeo'}><b>Lng:</b> {address.geo.lng}</p>
            <p><b>Phone:</b> {phone}</p>
            <p><b>Website:</b> {website}</p>
            <b>Company:</b>
            <p><b>Name:</b> {company.name}</p>
            <p><b>CatchPhrase:</b> {company.catchPhrase}</p>
            <p><b>Bs:</b> {company.bs}</p>
        </div>
    );
};

export {User};