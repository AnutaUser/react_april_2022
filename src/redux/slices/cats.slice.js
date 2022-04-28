import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cats:[],
    catForUpdate: null
};

const catSlice = createSlice({
    name:'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat= {id: Date.now(), name}
            state.cats.push(newCat);
        },
        dellCat: (state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id);
            state.cats.splice(index, 1);
        },
        setCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.cat;
        },
        updateCat: (state, action) => {
            const {id, name} = action.payload;
            const index = state.cats.findIndex(value => value.id === id);
            state.cats[index].name = name;
            state.catForUpdate = false;
        }
    }
});

const {reducer: catsReducer, actions: {addCat, dellCat, setCatForUpdate, updateCat}} = catSlice;

export default catsReducer;

export const catsActions = {
    addCat,
    dellCat,
    setCatForUpdate,
    updateCat
};