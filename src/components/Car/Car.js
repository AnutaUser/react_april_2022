import React from 'react';

const Car = ({car}) => {

    const {id, model, price, year} = car;

    return (
        <div>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
             -- -- -- -- -- --
        </div>
    );
};

export {Car};