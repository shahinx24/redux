import { createSelector } from 'reselect'
import { todosAdapter } from './todosSlice'

const selectTodosState = (state) => state.todos

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
} = todosAdapter.getSelectors(selectTodosState)

export const selectCompletedTodos = createSelector(
  [selectAllTodos],
  (todos) => todos.filter((todo) => todo.completed)
)
