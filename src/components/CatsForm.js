import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catsActions} from '../redux';

const CatsForm = () => {

    const [cat, setCat] = useState('');

    const {catForUpdate} = useSelector(({cats}) => cats);

    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            setCat(catForUpdate.name);
        }
    }, [catForUpdate]);

    const save = () => {
        if (catForUpdate) {
            dispatch(catsActions.updateCat({id: catForUpdate.id, name: cat}))
        } else {
            dispatch(catsActions.addCat({name: cat}));
        }
        setCat('');
    };

    return (
        <div>
            <label>Cat name: <input type="text" onChange={({target}) => setCat(target.value)} value={cat}/></label>
            <button onClick={()=> save()}>{catForUpdate ? 'update' : 'save'}</button>
        </div>
    );
};

export {CatsForm};