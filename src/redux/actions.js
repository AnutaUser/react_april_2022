import {LOAD_COMMENTS, LOAD_POSTS, LOAD_USERS} from './actions.types';

const loadUsersData = (payload) => {
    return ({type: LOAD_USERS, payload});

};

const loadPostsData = (payload) => {
    return ({type:LOAD_POSTS, payload});

};

const loadCommentsData = (payload) => {
    return ({type:LOAD_COMMENTS, payload});

};

export {loadCommentsData, loadUsersData, loadPostsData};