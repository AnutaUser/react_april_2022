import React from 'react';

const Dog = ({dog, dispatch}) => {

    const {name} = dog;

    return (
        <div>
            Dog name: <b>{name}</b> <button onClick={()=> dispatch({type:'delDog', payload: dog.id})}>delete</button>
        </div>
    );
};

export {Dog};
