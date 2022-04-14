import {axiosService} from './axios.service';
import {urls} from '../constants';

const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getByUserId: (postId) => axiosService.get(`${urls.comments}/${postId}`)
};

export {commentsService};