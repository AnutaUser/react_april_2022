import React from 'react';
import {useDispatch} from 'react-redux';

import {dogsActions} from '../redux';

const Dog = ({dog}) => {

    const {id, name} = dog;

    const dispatch = useDispatch();

    return (
        <div>
            {id} - {name}
            <button onClick={()=> dispatch(dogsActions.setDogForUpdate({dog}))}>update</button>
            <button onClick={()=> dispatch(dogsActions.dellDog({id}))}>delete</button>
        </div>
    );
};

export {Dog};