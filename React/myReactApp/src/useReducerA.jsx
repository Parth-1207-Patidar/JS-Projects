import React, {useContext, useReducer} from 'react'
import { CountContext } from './useReducerMain'

const UseReducerA = () => {
    const countContext = useContext(CountContext);
  return (
    <div>
        UseReducerA: 
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerA