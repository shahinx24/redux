import { useSelector } from 'react-redux'
import { selectAllTodos } from '../features/todos/todoSelectors'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector(selectAllTodos)

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList