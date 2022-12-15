import CounterSlice from "../features/counter/CounterSlice";

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer: {
        show: CounterSlice
    }
})