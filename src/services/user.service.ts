import {AxiosResponse} from "axios";

import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IUser} from "../interfaaces";

type Response<T> = Promise<AxiosResponse<T>>

const userService = {
    getAll: (): Response<IUser[]> => axiosService.get(urls.users)
};

export {userService};