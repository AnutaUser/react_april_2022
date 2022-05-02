import {combineReducers, configureStore} from '@reduxjs/toolkit';

import carReducer from './slices/car.slice';

const rootReducer = combineReducers({
    cars: carReducer
});

export const store = configureStore({
    reducer: rootReducer
});