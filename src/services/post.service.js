import {constants} from '../constants';

export const postService = {
    getAllPosts: () => fetch(constants.apiURL + 'posts').then(value => value.json())
};