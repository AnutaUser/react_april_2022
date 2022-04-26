import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter1: 0,
    counter2: 0
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
      inc1: state => {
          state.counter1 += 1;
      },
      dec1: state => {
          state.counter1 -= 1;
      },
      res1: (state, action) => {
          state.counter1 = action.payload || 0
      }, 
      inc2: state => {
          state.counter2 += 1;
      },
      dec2: state => {
          state.counter2 -= 1;
      },
      res2: (state, action) => {
          state.counter2 = action.payload || 0
      }  
    }
});

const {reducer: countReducer, actions: {inc1, inc2, dec1, dec2, res1, res2}} = counterSlice;

export default countReducer;

export const counterActions = {
    inc1,
    inc2,
    dec1,
    dec2,
    res1,
    res2
};