import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UseEffectFetch = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
            console.log(response)
            setPosts(response.data)
        }).catch(error => {
            console.log(error)
        })
        
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
        <ul>
            <li>{posts.title}</li>
            {/* {
                posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                )
            } */}
        </ul>
    </div>
  )
}

export default UseEffectFetch