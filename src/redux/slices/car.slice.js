import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {carsService} from '../../services';

const initialState = {
    cars: [],
    status: null,
    formError: {}
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data;
    }
);

const createAsync = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            dispatch(create({car:data}));
        }catch (e){
            return rejectWithValue({status: e.message, formError: e.response.data});
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car);
        }
    },

    extraReducers:(builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.cars = action.payload;
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                state.status = 'completed';
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formError} = action.payload;
                state.status = status;
                state.formError = formError;
            });
    }

    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'pending';
    //     },
    //
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'fulfilled';
    //         state.cars = action.payload;
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'rejected';
    //     },
    //     [createAsync.pending]: (state, action) => {
    //         state.status = 'pending'
    //     },
    //     [createAsync.fulfilled]: (state, action) => {
    //         // state.cars.push(action.payload);
    //         state.status = 'completed';
    //     },
    //     [createAsync.rejected]: (state, action) => {
    //         const {status, formError} = action.payload;
    //         state.status = status;
    //         state.formError = formError;
    //     }
    // }

});

const {reducer:carReducer, actions:{create}} = carSlice;

const carActions = {
    getAll,
    createAsync
};

export default carReducer
export {carActions};
