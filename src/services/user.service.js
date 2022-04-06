import {constants} from '../constants';

export const userService = {
    getAllUsers: () => fetch(constants.apiURL + 'users').then(value => value.json())
};