import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { addTodo, deleteTodo } from "../features/sampleSlice"

export default function Sample(){
    const [ input , setInput ] = useState("")
    const todos = useSelector((state)=>
        state.todos.items)
    const dispatch = useDispatch();

    const HandleClick = ()=> {
        if(input.trim() === "")return;
        dispatch(addTodo(input));
        setInput("")
    }

    return(
        <>
        <input
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={HandleClick}>Click</button>
        <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() =>
                    dispatch(deleteTodo(todo.id))
                }>Delete</button>
            </li>
        ))}
        </ul>
        </>
        
    )
}