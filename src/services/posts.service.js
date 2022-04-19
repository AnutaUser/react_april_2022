import {axiosService} from './axios.service';
import {urls} from '../constants';

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    geById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {postsService};