import React from 'react';
import {useDispatch} from 'react-redux';

import {carActions} from '../../redax/slices/car.slice';
import {useNavigate} from 'react-router-dom';

const CarDetail = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteByID = async () => {
        await dispatch(carActions.deleteCars({id}));
        navigate('/cars');
    };

    return (
        <div>
            <p><b>Id: </b>{id}</p>
            <p><b>Model: </b>{model}</p>
            <p><b>Price: </b>{price}</p>
            <p><b>Year: </b>{year}</p>
            <button onClick={() => deleteByID()}>delete</button>
            <button onClick={() => dispatch(carActions.setForUpdateById({car}))}>update</button>
        </div>
    );
};

export {CarDetail};