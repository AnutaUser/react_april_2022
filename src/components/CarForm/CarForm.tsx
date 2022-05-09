import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {carActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const CarForm = () => {

    const {register, reset, handleSubmit} = useForm<ICar>();

    const dispatch = useAppDispatch();

    const submit:SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.createCar({car}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" placeholder={'model'} {...register('model')}/></label></div>
            <div><label>Price: <input type="text" placeholder={'price'} {...register('price')}/></label></div>
            <div><label>Year: <input type="text" placeholder={'year'} {...register('year')}/></label></div>
            <button>SAVE</button>
        </form>
    );
};

export {CarForm};