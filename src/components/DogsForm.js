import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {dogsActions} from '../redux';

const DogsForm = () => {

    const [dog, setDog] = useState('');

    const dispatch = useDispatch();

    const {dogForUpdate} = useSelector(state => state.dogs);

    useEffect(() => {
        if (dogForUpdate) {
            setDog(dogForUpdate.name);
        }
    }, [dogForUpdate]);

    const save = () => {
        if (dogForUpdate) {
            dispatch(dogsActions.updateDog({name:dog, id:dogForUpdate.id}));
        } else {
            dispatch(dogsActions.addDog({name: dog}));
        }
        setDog('');
    };

    return (
        <div>
            <label>Dog name: <input type="text" onChange={({target})=> setDog(target.value)} value={dog}/></label>
            <button onClick={()=> save()}>{dogForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {DogsForm};