import React, {useEffect, useState} from 'react';

import css from './Cars.module.css';
import {carService} from '../../services';
import {Car} from '../Car/Car';

const Cars = ({newCar, setUpdateCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar])
            setCars(prevState => [...prevState, newCar])
        }
        if (deletedCar) {
            setCars(cars.filter(car => car.id !== setDeletedCar));
        }
    }, [newCar, deletedCar]);

    useEffect(() => {
        if (deletedCar) {
            setCars(cars.filter(car => car.id !== setDeletedCar));
        }
    }, [deletedCar]);

    return (
        <div className={css.cars}>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setDeletedCar={setDeletedCar}/>)}
        </div>
    );
};

export {Cars};