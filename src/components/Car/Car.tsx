import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

export interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car: {id, model}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <Link to={`${id}`}>
                <button>details</button>
            </Link>
            <hr/>
        </div>
    );
};

export {Car};