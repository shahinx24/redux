import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../features/todos/todosSlice'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim()) {
      dispatch(
        todoAdded({
          id: Date.now().toString(),
          title,
          completed: false,
        })
      )
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
