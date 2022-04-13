import React, {useEffect, useState} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';

import css from './Form.module.css';
import {carService} from '../../services';
import {carValidator} from '../../validators';

const Form = ({setNewCar, updateCar}) => {

    const [formError, setFormError] = useState({});

    const {register, reset, handleSubmit, formState:{errors}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode: 'onTouched'
    })

    useEffect(() => {
        if (updateCar) {
            const {model, price, year} = updateCar;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [updateCar]);

    const submit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data);
            reset();
        } catch (e) {
            setFormError(e.response.data)
        }
    }

    return (
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div className={css.formEl}><label>Model: <input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}

                <div className={css.formEl}><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}

                <div className={css.formEl}><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}

                <button>Save</button>
            </form>
    );
};

export {Form};
