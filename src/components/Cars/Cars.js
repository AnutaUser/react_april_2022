import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Car} from '../Car/Car';
import {carActions} from '../../redax/slices/car.slice';

const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAllCars());
    }, []);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};