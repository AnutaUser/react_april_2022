import React from 'react';

const Cat = ({cat, dispatch}) => {

    const {name} = cat;

    return (
        <div>
            Cat Name: {name} <button onClick={() => dispatch({type: 'delCat', payload: cat.id})}>delete</button>
        </div>
    );
};

export {Cat};
