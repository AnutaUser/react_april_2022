import axios, {AxiosResponse} from "axios";

import {IMission} from "../interfaces";

type AxiosType<T> = Promise<AxiosResponse<T>>;

export const missionsService = {
    getAll: (): AxiosType<IMission[]> => axios.get('https://api.spacexdata.com/v3/missions'),
    getById: (id: number): AxiosType<IMission> => axios.get('https://api.spacexdata.com/v3/missions')
};