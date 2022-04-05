import React from 'react';

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>body
        </div>
    );
};

export {Comment};