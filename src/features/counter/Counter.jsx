import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log("count>>>", count);

  //increment() = { type: "counter/increment" }
  //incrementByAmount(5) = { type: "counter/increment", payload:5 }
  return (
    <div>
      Counter
      <button onClick={() => dispatch(increment())}>inrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        inrement by Five
      </button>
      {count}
    </div>
  );
};

export default Counter;
