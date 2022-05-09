import React, {FC} from 'react';

import {IProps} from "../Car/Car";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

const CarDetail:FC<IProps> = ({car:{id, model, price, year}}) => {

    const dispatch = useAppDispatch();

    const deleteCarById = async (id:string) => {
        await dispatch(carActions.deleteCar({id}))
    }

    return (
        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => deleteCarById}>DELETE</button>
        </div>
    );
};

export {CarDetail};