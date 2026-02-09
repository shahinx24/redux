import Counter from "./components/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Counter />
    </>
  );
}

export default App;