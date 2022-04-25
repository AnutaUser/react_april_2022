import {LOAD_USERS} from './actions.types';

function UsersReducer(state = [], action) {
    switch (action.type) {
        case LOAD_USERS:
            return [...action.payload];

        default:
            return state;
    }
}

export {UsersReducer};