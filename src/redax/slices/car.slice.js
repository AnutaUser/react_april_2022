import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carsService} from '../../services';

const initialState = {
    cars: [],
    status: null,
    formErr: {},
    carForUpdate: null
};

const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async () => {
        const {data} = await carsService.getAll();
        return data;
    }
);

const deleteCars = createAsyncThunk(
    'carSlice/deleteCars',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            dispatch(deleteById({id}));
        }catch (e) {
            return rejectWithValue({status: e.message});
        }
    }
);

const updateCars = createAsyncThunk(
    'carSlice/updateCars',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.updateById(id, car);
            dispatch(updateById({id, car}));
        }catch (e) {
            return rejectWithValue({status: e.message});
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            dispatch(create({car:data}));
        } catch (e) {
            return rejectWithValue({status: e.message, formErr: e.response.data})
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        create: (state, action) => {
            state.cars.push(action.payload.car);
        },
        deleteById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars.splice(index, 1);
        },
        updateById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false;
        },
        setForUpdateById: (state, action) => {
            state.carForUpdate = action.payload.car;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.status = 'fulfilled';
            })
            .addCase(createCar.rejected, (state, action) => {
                const {status, formErr} = action.payload;
                state.status = status;
                state.formErr = formErr;
            })
    }
});

const {reducer:carReducer, actions:{create, deleteById, updateById, setForUpdateById}} = carSlice;

const carActions = {getAllCars, createCar, deleteCars, updateCars,  setForUpdateById};

export default carReducer;
export {carActions, create, deleteById, updateById,};

