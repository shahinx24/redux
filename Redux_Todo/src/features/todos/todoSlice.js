import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
  nextId: 1,
})

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      todosAdapter.addOne(state, {
        id: state.nextId,
        title: action.payload,
        completed: false,
      })

      state.nextId += 1
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