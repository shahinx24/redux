import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
  nextId: 1,
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        todosAdapter.addOne(state, action.payload)
        state.nextId += 1
      },
      prepare: (title, id) => ({
        payload: {
          id,
          title,
          completed: false,
        },
      }),
    },
    todoUpdated: todosAdapter.updateOne,
    todoRemoved: todosAdapter.removeOne,
  },
})

export const {
  todoAdded,
  todoUpdated,
  todoRemoved,
} = todosSlice.actions

export default todosSlice.reducer
