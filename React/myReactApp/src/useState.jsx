import React, {useState} from 'react'

const fxn = () => {
    const [count, setCount] = useState(0);

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1); // This will not work as expected because react bundles multiple setCount calls into a single update for performance reasons
            setCount(prev => prev + 1); // This will work as expected because it accepts a function as an argument and returns the updated value, in short it uses the previous state and updates it accordingly
        }
    }

    //useState with objects
    const [name, setName] = useState({firstName: '', lastName: ''});

    const handleOnChange = (e) => {
        setName({
            ...name, // This is a spread operator, it copies the existing object and then we can update the specific property
            [e.target.name] : e.target.value
        })
    }

    //useState with arrays, (more like an array of objects)
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([
            ...items, {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1}
        ])
    }

  return (
    <>
        {/* <h1>Count: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={incrementByFive}>+5</button> */}

        {/* <h1>{name.firstName} {name.lastName}</h1>
        <input type="text" name='firstName' onChange={handleOnChange} value={name.firstName}/>
        <input type="text" name='lastName' onChange={handleOnChange} value={name.lastName}/> */}

        <button onClick={addItem}>Push a random number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
        <h1>{JSON.stringify(items)}</h1>
    </>
  )
}

export default fxn;