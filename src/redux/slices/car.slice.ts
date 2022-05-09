import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IState {
    cars: ICar[];
}

const initialState:IState = {
    cars: []
}

const getAllCars = createAsyncThunk<ICar[], void>(
    'carSlice/getAllCars',
    async () => {
        const {data} = await carService.getAll();
        return data;
    }
);

const createCar = createAsyncThunk<ICar, { car:ICar }>(
    'carSlice/createCar',
    async ({car}) => {
        const {data} = await carService.create(car);
        return data;
    }
);

const deleteCar = createAsyncThunk<void, {id:string}>(
    'carSlice/deleteCar',
    async ({id},{dispatch}) => {
        await carService.delete(id);
        dispatch(deleteById({id}));
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars.splice(index, 1);
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
    })
});

const {reducer: carReducer, actions:{deleteById}} = carSlice;

const carActions = {getAllCars, createCar, deleteCar, };

export {
    carReducer,
    carActions,
    deleteById
};