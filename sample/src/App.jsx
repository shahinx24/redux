import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;