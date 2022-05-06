import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";
import {ICar} from "../../interfaaces";

const CarForm:FC = () => {

    const {register, reset, handleSubmit} = useForm<ICar>();

    const dispatch = useAppDispatch();

    const submit:SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            <button>save</button>

        </form>
    );
};

export {CarForm};