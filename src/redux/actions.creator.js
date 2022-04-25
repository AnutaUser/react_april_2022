import {loadCommentsData, loadPostsData, loadUsersData} from './actions';

const loadUsers = () => async (dispatch) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch(loadUsersData(users));
};

const loadPosts = () => async (dispatch) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    dispatch(loadPostsData(posts));
};

const loadComments = () => async (dispatch) => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());
    dispatch(loadCommentsData(comments));
};

export {loadComments, loadPosts, loadUsers};