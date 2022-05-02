import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {carActions, updateById} from '../../redax/slices/car.slice';

const CarForm = () => {

    const {reset, register, handleSubmit, setValue} = useForm();

    const dispatch = useDispatch();

    const {formErr, carForUpdate} = useSelector(({cars}) => cars);

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCars({id: carForUpdate.id, car: newCar}));
        } else {
            await dispatch(carActions.createCar({car: newCar}));
        }
        reset();
    };

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {formErr.model && <span>{formErr.model[0]}</span>}
            <div><label>Price: <input type="text" {...register('price')}/></label></div>
            {formErr.price && <span>{formErr.price[0]}</span>}
            <div><label>Year: <input type="text" {...register('year')}/></label></div>
            {formErr.year && <span>{formErr.year[0]}</span>}
            <button>{carForUpdate ? ' $ ~ UPDATE CAR ~ $ ' : ' $ ~ SAVE CAR ~ $ '}</button>
        </form>
    );
};

export {CarForm};