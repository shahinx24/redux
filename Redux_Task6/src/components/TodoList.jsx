import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../features/todos/todosSlice'
import {
  selectAllTodos,
} from '../features/todos/todosSelectors'
import TodoItem from './TodoItem'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectAllTodos)
  const status = useSelector((state) => state.todos.status)
  const error = useSelector((state) => state.todos.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos())
    }
  }, [status, dispatch])

  let content

  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    content = todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))
  } else if (status === 'failed') {
    content = <p>{error}</p>
  }

  return <div>{content}</div>
}

export default TodoList
