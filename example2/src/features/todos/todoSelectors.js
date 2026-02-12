import { todosAdapter } from './todoSlice'

const selectTodosState = (state) => state.todos

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
} = todosAdapter.getSelectors(selectTodosState)