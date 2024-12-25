import { useEffect, useState } from "react";

const UseEffect = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');


  useEffect(() => {                            //useEffect is a hook that runs after the render is committed to the screen
    document.title = `Count: ${count}`;
    console.log('useEffect ran');
  }, [count])                                  //Only re-run the effect if count changes


  //rendering only once

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [display, setDisplay] = useState(true);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log('useEffect Called in MouseMove');
    window.addEventListener('mousemove', logMousePosition);
  }, []) //by adding an empty array, the useEffect will only run once, after the initial render


  //clean up useEffect
  useEffect(() => {
    console.log('useEffect Called in MouseMove');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Component Unmounting Code');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])


  return (
    <div>
        <button onClick={() => setCount(prev => prev + 1)}>{count}</button>  {/* Will trigger the useEffect fxn */}
        <input type="text" value={name} onChange={() => setName(event.target.value)} /> {/* Will not trigger the useEffect fxn */}
        <h1>{name}</h1>
        {display && <h1>X: {x} Y: {y}</h1>}
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  )
}

export default UseEffect;