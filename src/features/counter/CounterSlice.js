import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        showData: (state) => {
            state.value = state.value;
        },
        increment: (state) => {
            state.value = state.value + 1;
        }
    }
})

export const { showData, increment } = CounterSlice.actions;

export default CounterSlice.reducer;