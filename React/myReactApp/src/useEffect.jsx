import { useEffect, useState } from "react";

const UseEffect = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  useEffect(() => {                            //useEffect is a hook that runs after the render is committed to the screen
    document.title = `Count: ${count}`
    console.log('useEffect ran')
  }, [count])                                  //Only re-run the effect if count changes

  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>{count}</button>  {/* Will trigger the useEffect fxn */}
        <input type="text" value={name} onChange={() => setName(event.target.value)} /> {/* Will not trigger the useEffect fxn */}
        <h1>{name}</h1>
    </div>
  )
}

export default UseEffect;