import React from 'react';

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div className={'comment'}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Comment};