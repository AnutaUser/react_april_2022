import React from 'react';

import css from './Car.module.css';
import {carService} from '../../services';

const Car = ({car, setUpdateCar}) => {

    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
    };

    return (
        <div className={css.car}>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => setUpdateCar(car)}>update</button>
        </div>
    );
};

export {Car};