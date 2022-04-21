import {axiosService} from './axios.service';
import {urls} from '../constants';

const postsService = {
    getAll: (page, _limit = 5) => axiosService.get(urls.posts, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }),
    geById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`)
};

export {postsService};