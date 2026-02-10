import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

export default function Counter(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch =useDispatch();

    return(
        <>
        <h1>Redux Counter</h1>
        <h3>Count : {count}</h3>

        <button onClick={()=> dispatch(increment())}> + </button>
        <button onClick={()=> dispatch(decrement())}> - </button>
        <button onClick={()=> dispatch(reset())}> RESET </button>
        </>
    )
}