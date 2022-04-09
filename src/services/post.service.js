import {axiosService} from './axios.service';
import {urls} from '../constants';

const postService = {
    getPostsByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
};

export {postService};