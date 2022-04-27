import React from 'react';
import {useDispatch} from 'react-redux';

import {catsActions} from '../redux';

const Cat = ({cat:{name, id}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            {name} <button onClick={()=> dispatch(catsActions.dellCat({id}))}>delete</button>
        </div>
    );
};

export {Cat};