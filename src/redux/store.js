import {combineReducers, configureStore} from '@reduxjs/toolkit';

import countReducer from './slices/counter.slice';
import usersReducer from './slices/users.slice';

const rootReducer = combineReducers({
    counter: countReducer,
    users: usersReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {store};