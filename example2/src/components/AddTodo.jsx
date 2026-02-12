import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdded } from '../features/todos/todoSlice'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    dispatch(todoAdded(title))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo