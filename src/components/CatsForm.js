import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {catsActions} from '../redux';

const CatsForm = () => {

    const [cat, setCat] = useState('');

    const dispatch = useDispatch();

    const {catForUpdate} = useSelector(({cats}) => cats);

    useEffect(() => {
        if (catForUpdate) {
            setCat(catForUpdate.name);
        }
    }, [catForUpdate]);

    const save = () => {
        if (catForUpdate) {
            dispatch(catsActions.updateCat({name:cat, id:catForUpdate.id}))
        } else {
            dispatch(catsActions.addCat({name:cat}));
        }
        setCat('');
    };

    return (
        <div>
            <label>Cat name: <input type="text" onChange={({target}) => setCat(target.value)} value={cat}/></label>
            <button onClick={() => save()}>{catForUpdate ? 'update' : 'save'}</button>
        </div>
    );
};

export {CatsForm};