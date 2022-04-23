import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const App = () => {

    const state = useSelector(state => state);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>State is -- {state}</h1>

            <button onClick={() =>{dispatch({type:'inc', payload: 1})}}>increment</button>
            <button onClick={() =>{dispatch({type:'dec', payload: 1})}}>decrement</button>
            <button onClick={() =>{dispatch({type:'res', payload: 0})}}>reset</button>
        </div>
    );
};

export default App;
