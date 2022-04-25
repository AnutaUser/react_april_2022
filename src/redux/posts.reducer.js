import {LOAD_POSTS} from './actions.types';

function PostsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_POSTS:
            return [...action.payload];

        default:
            return state;
    }
}

export {PostsReducer};



