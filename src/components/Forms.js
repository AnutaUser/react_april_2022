import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';

import {usersActions} from '../redux';

const Forms = () => {

    const refInput = useRef();

    const dispatch = useDispatch();


    return (
        <div>
            <input type="text" ref={refInput}/>
            <button onClick={() => dispatch(usersActions.addUser({user: refInput.current.value}))}>SAVE</button>
        </div>
    );
};

export {Forms};