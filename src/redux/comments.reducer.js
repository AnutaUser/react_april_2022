import {LOAD_COMMENTS} from './actions.types';

const CommentsReducer = (state= [], action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return [...action.payload];

        default:
            return state;
    }
};

export {CommentsReducer};