import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import {UsersReducer} from './users.reducer';
import {PostsReducer} from './posts.reducer';
import {CommentsReducer} from './comments.reducer';

const reducers = combineReducers({usersState: UsersReducer, postsState: PostsReducer, commentsState: CommentsReducer});

export let store = createStore(reducers, applyMiddleware(thunk));