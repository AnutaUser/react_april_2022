import React, {useEffect, useState} from 'react';

import css from './Cars.module.css';
import {carService} from '../../services';
import {Car} from '../Car/Car';

const Cars = ({newCar, setUpdateCar}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar])
            setCars(prevState => [...prevState, newCar])
        }
    }, [newCar]);

    return (
        <div className={css.cars}>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export {Cars};