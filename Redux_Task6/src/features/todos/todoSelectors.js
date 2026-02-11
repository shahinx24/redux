import { createSelector } from 'reselect'
import { todosAdapter } from './todoSlice'

const selectTodoState = (state) => state.todos

export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
} = todosAdapter.getSelectors(selectTodoState)

export const selectCompletedTodos = createSelector(
  [selectAllTodos],
  (todos) => todos.filter((todo) => todo.completed)
)
