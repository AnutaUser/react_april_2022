import React, {useReducer, useState} from 'react';

import {Cat, Dog} from './components';

const reducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case 'delDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
    }
};

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const [catValue, setCatValue] = useState('');
    const [dogValue, setDogValue] = useState('');

    const createCat = () => {
        dispatch({type: 'addCat', payload: catValue});
        setCatValue('');
    };

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogValue});
        setDogValue('');
    };

    return (
        <div>

            <div>
                <div>
                    <label>Add new cat: <input type="text" onChange={({target}) => setCatValue(target.value)}
                                               value={catValue} placeholder={'New cat'}/></label>
                    <button onClick={() => createCat()}>Save</button>
                </div>
                <div>
                    <label>Add new dog: <input type="text" onChange={({target}) => setDogValue(target.value)}
                                               value={dogValue} placeholder={'New dog'}/></label>
                    <button onClick={() => createDog()}>Save</button>
                </div>
            </div>

            <hr/>

            <div>
                <div>
                    {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </div>
                <div>
                    {state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
                </div>
            </div>

        </div>
    );
};

export default App;