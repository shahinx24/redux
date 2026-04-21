import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../features/counter/todoSlice"

export default function Todo(){
    const [input , setInput ] = useState("")
    const todos = useSelector((state)=> state.todos.items)
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim() === "") return;
        dispatch(addTodo(input))
        setInput("")
    }

    return(
        <div>
            <h1>Todo App</h1>
            <input value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo" />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=>
                            dispatch(deleteTodo(todo.id))
                        }>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}