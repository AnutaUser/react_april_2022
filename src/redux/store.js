import {combineReducers, configureStore} from '@reduxjs/toolkit';

import catsReducer from './slices/cats.slice';
import dogsReducer from './slices/dogs.slice';

const rootReducer = combineReducers({
    cats: catsReducer,
    dogs: dogsReducer
});

export const store = configureStore({
    reducer: rootReducer
});