import React, {useState} from 'react';

const FunctionComponent = ({sdsd}) => {

    const [state, setState] = useState({a: 0, b: 25});

    const inc = () => {
        setState({...state, a: state.a + 1});
    }

    return (
        <h1>
            Hello from Function Components !!!!!!!
            <div>A: {sdsd}</div>
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <button onClick={()=> inc()}>inc</button>
        </h1>
    );
};

export {FunctionComponent};