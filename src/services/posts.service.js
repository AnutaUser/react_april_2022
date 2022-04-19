import {axiosService} from './axios.service';
import urls from '../constants/urls';

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    geById: (id) => axiosService.get(`${urls.users}/${id}/posts`)
};

export {postsService};