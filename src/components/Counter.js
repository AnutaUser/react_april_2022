import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {counterActions} from '../redux';

const Counter = () => {

    const {counter1, counter2} = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const useRef1 = useRef();
    const useRef2 = useRef();

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{marginRight:'30px'}}>
                <h1>COUNTER1: {counter1}</h1>
                <div>
                    <button onClick={() => dispatch(counterActions.inc1())}>INC</button>
                    <button onClick={() => dispatch(counterActions.dec1())}>DEC</button>
                    <button onClick={() => dispatch(counterActions.res1())}>RES</button>
                </div>
                <div>
                    <input type="text" ref={useRef1}/>
                    <button onClick={() => dispatch(counterActions.res1(+useRef1.current.value))}>Enter Your Number</button>
                </div>
            </div>
            <div>
                <h1>COUNTER2: {counter2}</h1>
                <div>
                    <button onClick={() => dispatch(counterActions.inc2())}>INC</button>
                    <button onClick={() => dispatch(counterActions.dec2())}>DEC</button>
                    <button onClick={() => dispatch(counterActions.res2(10))}>RES</button>
                </div>
                <div>
                    <input type="text" ref={useRef2}/>
                    <button onClick={() => dispatch(counterActions.res2(+useRef2.current.value))}>Enter Your Number</button>
                </div>
            </div>
        </div>
    );
};

export {Counter};