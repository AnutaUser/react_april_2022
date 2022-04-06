import {constants} from '../constants';

export const commentService = {
    getAllComments: () => fetch(constants.apiURL + 'comments').then(value => value.json())
};