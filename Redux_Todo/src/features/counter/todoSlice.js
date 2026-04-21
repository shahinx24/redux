import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducer: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
      })
    },
    deleteTodo: (state, action) => {
      state.item = state.items.filter(
        (todo) => todo.id !== action.payload 
      )
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;