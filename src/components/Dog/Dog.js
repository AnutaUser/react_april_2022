import React from 'react';

const Dog = ({dog, dispatch}) => {

    const {name} = dog;

    return (
        <div>
            Dog name: {name} <button onClick={()=> dispatch({type: 'delDog', payload: dog.id})}>delete</button>
        </div>
    );
};

export {Dog};
