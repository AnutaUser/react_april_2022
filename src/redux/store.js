import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import {reducerUsers} from './user.reducer';
import {reducerPosts} from './posts.reducer';

const reducers = combineReducers({usersState: reducerUsers, postsState:reducerPosts});

export let store = createStore(reducers, applyMiddleware(thunk));