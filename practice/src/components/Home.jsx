import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Toolkit Example</h1>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          dispatch(increment);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement);
        }}
      ></button>
    </>
  );
};

export default Home;
