import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState()

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer: todosAdapter.addOne,
      prepare: (title) => ({
        payload: {
          id: Date.now().toString(),
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