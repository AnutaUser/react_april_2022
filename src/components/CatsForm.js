import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {catsActions} from '../redux';

const CatsForm = () => {

    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const save = () => {
        dispatch(catsActions.addCat({name}))
        setName('');
    };

    return (
        <div>
            <label>Cat name: <input type="text" onChange={({target}) => setName(target.value)} value={name}/></label>
            <button onClick={()=> save()}>save</button>
        </div>
    );
};

export {CatsForm};