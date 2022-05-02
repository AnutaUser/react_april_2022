import React from 'react';
import {useDispatch} from 'react-redux';

import {carActions} from '../../redax/slices/car.slice';

const Car = ({car}) => {

    const {id,model, price, year} = car;

    const dispatch = useDispatch();

    const deleteByID = () => {
        dispatch(carActions.deleteCars({id}));
    };

    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <button onClick={() => deleteByID()}>delete</button>
            <button onClick={() => dispatch(carActions.setForUpdateById({car}))}>update</button>
        </div>
    );
};

export {Car};