import React, {FC} from 'react';

import {IUser} from "../../interfaaces";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user:{id, name, username, email}}) => {

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>username: {username}</div>
        </div>
    );
};

export {User};