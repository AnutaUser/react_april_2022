import React from 'react';
import {Link} from 'react-router-dom';

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            {id}. {name} <Link to={`${id}`}><button>details</button></Link>
        </div>
    );
};

export {User};