import React from 'react';
import {useDispatch} from 'react-redux';

import {catsActions} from '../redux';

const Cat = ({cat}) => {

    const {id, name} = cat;

    const dispatch = useDispatch();

    return (
        <div>
            {id}. {name}
            <button onClick={()=> dispatch(catsActions.setCat({cat}))}>update</button>
            <button onClick={() => dispatch(catsActions.dellCat({id}))}>delete</button>
        </div>
    );
};

export {Cat};