import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cats:[]
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
        updateCat: (state, action) => {

        }
    }
});

const {reducer: catsReducer, actions: {addCat, dellCat, updateCat}} = catSlice;

export default catsReducer;

export const catsActions = {
    addCat,
    dellCat,
    updateCat
};