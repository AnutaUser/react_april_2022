import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cats: [],
    catForUpdate: null
};

const catsSlice = createSlice({
    name:'catsSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {id: Date.now(), name};
            state.cats.push(newCat);
        },
        dellCat: (state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id);
            state.cats.splice(index, 1);
        },
        setCat: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },
        updateCat: (state, action) => {
            const {id, name} = action.payload;
            const index = state.cats.findIndex(value => value.id === id);
            state.cats[index].name = name;

        }
    }
});

const {reducer: catsReducer, actions:{addCat, dellCat, setCat, updateCat}} = catsSlice;

export default catsReducer;

export const catsActions = {addCat, dellCat, setCat, updateCat};