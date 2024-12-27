import React from 'react'

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


const UseReducerMini = () => {
    const [count, dispatch] = React.useReducer(reducer, initialState);
    const [countAlt, dispatchAlt] = React.useReducer(reducer, initialState);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <h1>{countAlt}</h1>
        <button onClick={() => dispatchAlt('increment')}>Increment</button>
        <button onClick={() => dispatchAlt('decrement')}>Decrement</button>
        <button onClick={() => dispatchAlt('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerMini