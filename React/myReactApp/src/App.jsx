import { useState } from 'react';
import Book from './books.json';
import data from './data.json';

const App = () => {

  // const [count, setCount] = useState(0);
  // const [nData, setNData] = useState(data);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  //can be done in one useState

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleOnChange = (e) => {
    (e.target.id === 'name') ? setName(e.target.value) : setEmail(e.target.value);
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <>
      {/* {Book.map(book => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.year}</p>
          </div>
        );
      })} */}

      {/* <ul>
      {
        nData.map(item => {
          return (
            <li key={item.id}>
              <h2>{item.id}</h2>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <button onClick={() => {
                setNData(nData.filter(i => i.id !== item.id));
              }}>remove</button>
              <button onClick={() => {
                setNData(nData.map(i => {
                  return i.id === item.id ? {name: 'updated'} : i
                }))
              }}>update</button>
            </li>
          )
        })
      }
      </ul> */}

      {/* <button id='clear' onClick={() => {
        setNData([]);
      }}>clear</button>

      <h1>{count}</h1>

      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>


      <button onClick={() => {
        setCount(count - 1);
      }}>Decrement</button> */}

      <label htmlFor='name'>Name</label>
      <input type='text' name='name' id='name' value={formData.name} onChange={handleInputChange} placeholder='Enter your name'></input>
      <p>{formData.name}</p>
      
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' id='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your mail ID'></input>
      <p>{formData.email}</p>

    </>
  );
}
export default App;