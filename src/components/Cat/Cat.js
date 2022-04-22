import React from 'react';

const Cat = ({cat, dispatch}) => {

    const {name} = cat;

    return (
        <div>
            Cat name: <b>{name}</b>
            <button onClick={()=> dispatch({type:'delCat', payload: cat.id})}>delete cat</button>
        </div>
    );
};

export {Cat};
