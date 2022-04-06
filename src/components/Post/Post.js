import React from 'react';

import '../../App.css';

const Post = ({post}) => {
    
    const {id, title, body} = post;

    return (
        <div className={'post'}>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};