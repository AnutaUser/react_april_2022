import {loadPostsData, loadUsersData} from './actions';

// const loadUsers = (payload, dispatch) => {
//     dispatch ({type: LOAD_USERS, payload});
// };

const loadUsers = () => async (dispatch) => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    dispatch(loadUsersData(users))
};

//     const loadPosts = (payload, dispatch) => {
//     dispatch ({type:LOAD_POSTS, payload});
// };

const loadPosts = () => async (dispatch) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());
    dispatch(loadPostsData(posts));
};

export {loadUsers, loadPosts};