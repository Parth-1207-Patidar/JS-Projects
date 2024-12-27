import React, {useReducer} from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "firstIncrement":
        let arm = { ...state, firstCount: state.firstCount + action.value }
        console.log(arm);
      return arm;
    case "firstDecrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "firstReset":
      return { ...state, firstCount: initialState.firstCount };
    case "secondIncrement":
      return { ...state, secondCount: state.secondCount + action.value };
    case "secondDecrement":
      return { ...state, secondCount: state.secondCount - action.value };
    case "secondReset":
      return { ...state, secondCount: initialState.secondCount };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count.firstCount}   -   {count.secondCount}</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'firstIncrement',
            value: 1,
          });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'firstIncrement',
            value: 5,
          });
        }}
      >
        Increment 5
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'firstDecrement',
            value: 1,
          });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'firstDecrement',
            value: 5,
          });
        }}
      >
        Decrement 5
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'firstReset'
          });
        }}
      >
        Reset
      </button>



      <button
        onClick={() => {
          dispatch({
            type: 'secondIncrement',
            value: 1,
          });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'secondIncrement',
            value: 5,
          });
        }}
      >
        Increment 5
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'secondDecrement',
            value: 1,
          });
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'secondDecrement',
            value: 5,
          });
        }}
      >
        Decrement 5
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'secondReset'
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
