import React, {useReducer, useState} from 'react';
import {Cat, Dog} from './components';

const reducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'delCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
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

    const createNewCat = () => {
        dispatch({type: 'addCat', payload: catValue});
        setCatValue('');
    };

    const createNewDog = () => {
        dispatch({type: 'addDog', payload: dogValue});
        setDogValue('');
    };


    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', margin: '20px'}}>
                <div style={{marginRight: '20px'}}>
                    <label>Add new cat: <input type="text" onChange={({target}) => setCatValue(target.value)}
                                               value={catValue} placeholder={'cat'}/></label>
                    <button onClick={() => createNewCat()}>SAVE</button>
                </div>
                <div>
                    <label>Add new dog: <input type="text" onChange={({target}) => setDogValue(target.value)}
                                               value={dogValue} placeholder={'dog'}/></label>
                    <button onClick={() => createNewDog()}>SAVE</button>
                </div>
            </div>

            <hr style={{height:'5px', background:'grey'}}/>

            <div style={{display:'flex', justifyContent:'center',}}>
                <div style={{width: '200px'}}>
                    {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                </div>
                <div style={{width: '200px'}}>
                    {state.dogs.map(dog=> <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
                </div>
            </div>

        </div>
    );
};

export default App;