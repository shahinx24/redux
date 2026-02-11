import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from '@reduxjs/toolkit'

const todosAdapter = createEntityAdapter()

const initialState = todosAdapter.getInitialState({
  status: 'idle',
  error: null,
})

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    return await response.json()
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoUpdated: todosAdapter.updateOne,
    todoRemoved: todosAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        todosAdapter.setAll(state, action.payload)
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const {
  todoAdded,
  todoUpdated,
  todoRemoved,
} = todosSlice.actions

export default todosSlice.reducer
