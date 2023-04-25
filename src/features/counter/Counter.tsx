import React from 'react';
import type {RootState} from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  // & Get redux persist working 

  return (
    <div>
      <div>
        <button
          aria-label="increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      
      </div>
    </div>
  );
}