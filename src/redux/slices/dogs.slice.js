import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dogs: [],
    dogForUpdate: null
};

const dogsSlice = createSlice({
    name:'dogsSlice',
    initialState,
    reducers: {
       addDog: (state, action) => {
           const {name} = action.payload;
           const newDog = {id: Date.now(), name};
           state.dogs.push(newDog);
       },
       delDog: (state, action) => {
           state.dogs = state.dogs.filter(value => value.id !== action.payload.id);
       },
       setDogForUpdate: (state, action) => {
           state.dogForUpdate = action.payload.dog;
       },
        updateDog: (state, action) => {
            const {id, name} = action.payload;
            const index = state.dogs.findIndex(value => value.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = false;
        }
    }
});

const {reducer: dogsReducer, actions: {addDog, delDog, setDogForUpdate, updateDog}} = dogsSlice;

export default dogsReducer;

export const dogsActions = {
    addDog,
    delDog,
    setDogForUpdate,
    updateDog
};
