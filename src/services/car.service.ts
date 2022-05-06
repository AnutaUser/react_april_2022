import {ICar} from "../interfaaces";
import {axiosService, Res} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string):Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car: ICar): Res<ICar> => axiosService.post(urls.cars, car),
    update: (id: string, car:ICar): Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    delete: (id: string): Res<void> => axiosService.delete(`${urls.cars}/${id}`)
};

export {carService};