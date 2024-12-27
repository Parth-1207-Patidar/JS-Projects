import React, {useState, useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {},
}

const reducer = (state, action) => {
    state.loading = true
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload,
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: action.errorMessage,
                post: {},
            }
    }
}

const UseReducerFetch = () => {

    const [id, setId] = useState(1)

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log('useEffect')
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_ERROR',
                errorMessage: 'Something went wrong! ' + err
            })
        })
    }, [id])

  return (
    <>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        {state.loading ? 'Loading...' : state.post.title}
        <br />
        {state.error ? state.error : null}
    </>
  )
}

export default UseReducerFetch