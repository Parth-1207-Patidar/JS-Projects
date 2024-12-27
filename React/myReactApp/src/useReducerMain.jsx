import React, { useContext, useReducer } from "react";
import UseReducerA from "./useReducerA";
import UseReducerB from "./useReducerB";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();

const UseReducerMain = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h1>{count}</h1>
        <UseReducerA />
        <UseReducerB />
      </CountContext.Provider>
    </div>
  );
};

export default UseReducerMain;
