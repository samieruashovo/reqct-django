import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
const initialState = {
    loading: true,
    article: {},
    error: ''

}
const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                article: action.payload,
                error: ''
            }
        case 'error':
            return {
                loading: false,
                article: action.payload,
                error: 'error'
            }
    }
}
function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(resp => {
            dispatch({ type: 'success', payload: resp.data })
        }).catch(error => dispatch({ type: 'error' }))
    })
    return (
        <div>
            {state.loading ? 'loading' : state.article.body}
            {state.error ? state.error : null}

        </div>
    )
}

export default DataFetching