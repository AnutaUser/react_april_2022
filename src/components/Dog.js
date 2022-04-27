import React from 'react';
import {useDispatch} from 'react-redux';
import {dogsActions} from '../redux';

// const Dog = ({dog:{id, name}}) => {
const Dog = ({dog}) => {
    const {id, name} = dog;
    const dispatch = useDispatch();

    return (
        <div>
            {/*{dog.id} - {dog.name}*/}
            {id} - {name}
            <button onClick={()=> dispatch(dogsActions.setDogForUpdate({dog}))}>update</button>
            <button onClick={()=> dispatch(dogsActions.delDog({id}))}>delete</button>
        </div>
    );
};

export {Dog};