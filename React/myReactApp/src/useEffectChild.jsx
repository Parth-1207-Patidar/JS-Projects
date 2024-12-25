import React, {useState, useEffect} from 'react'


const UseEffectChild = () => {

  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [count]) //by adding an empty array, the useEffect will only run once, after the initial render

// a dependency array is the array of variables/states/elements that react watches for changes, if any, it will re-render thus calling the useEffect fxn 
    return (
    <>
      {count}
    </>
  )
}

export default UseEffectChild