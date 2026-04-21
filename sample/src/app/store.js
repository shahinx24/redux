import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/sampleSlice"

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})