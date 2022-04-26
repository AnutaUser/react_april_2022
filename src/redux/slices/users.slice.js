import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {user} = action.payload;
            const newUser = {id:Date.now(), name:user};
            state.users.push(newUser);
        },
        dellUser: (state, action) => {
            const index = state.users.findIndex(value => value.id === action.payload.id);
            state.users.splice(index, 1);
        }
    }
});

const {reducer:usersReducer, actions:{addUser, dellUser}} = usersSlice;

export default usersReducer;

export const usersActions = {
    addUser,
    dellUser
};