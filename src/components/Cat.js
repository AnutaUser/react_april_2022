import React from 'react';
import {useDispatch} from 'react-redux';

import {catsActions} from '../redux';

const Cat = ({cat}) => {

    const {name, id} = cat;
    const dispatch = useDispatch();

    return (
        <div>
            {name}
            <button onClick={()=> dispatch(catsActions.setCatForUpdate({cat}))}>update</button>
            <button onClick={()=> dispatch(catsActions.dellCat({id}))}>delete</button>
        </div>
    );
};

export {Cat};