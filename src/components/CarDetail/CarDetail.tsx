import React, {FC} from 'react';

import {IProps} from "../Car/Car";

interface IProp extends IProps {}

const CarDetail:FC<IProp> = ({car:{id, model, price, year}}) => {

    return (

        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button>delete</button>
        </div>
    );
};

export {CarDetail};