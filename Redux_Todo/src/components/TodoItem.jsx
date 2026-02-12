import { useDispatch } from 'react-redux'
import {
  todoUpdated,
  todoRemoved,
} from '../features/todos/todoSlice'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(
      todoUpdated({
        id: todo.id,
        changes: { completed: !todo.completed },
      })
    )
  }

  const handleDelete = () => {
    dispatch(todoRemoved(todo.id))
  }

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <span
        onClick={handleToggle}
        style={{
          cursor: 'pointer',
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem