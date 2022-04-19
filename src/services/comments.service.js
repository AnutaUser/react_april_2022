import {axiosService} from './axios.service';
import {urls} from '../constants';

const commentsService = {
    getByPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`)
};

export {commentsService};