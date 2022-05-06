import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {ICar} from "../../interfaaces";

export interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car:{id, model}}) => {

    return (
        <div style={{width:'120px', border: '1px solid black', margin:'5px', padding: '5px'}}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <Link to={`${id}`}>
                <button>details</button>
            </Link>
        </div>
    );
};

export {Car};