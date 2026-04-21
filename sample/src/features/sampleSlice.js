import {createSlice} from "@reduxjs/toolkit"

const samapleSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],

    },
    reducers: {
        addTodo: (state, action)=>{
            state.items.push({
                id: Date.now(),
                text: action.payload,
            }
            )
        },
        deleteTodo: (state, action) =>{
            state.items = state.items.filter( (todo)=> todo.id !== action.payload)
        }
    }
})

export const { addTodo, deleteTodo} = samapleSlice.actions
export default samapleSlice.reducer;