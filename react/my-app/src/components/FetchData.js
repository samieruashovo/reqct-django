import React, { useState, useEffect } from 'react'
import axios from 'axios' // axios use korar age intall kore nite hobe npm install axios

function FetchData() {
    const [article, setArticle] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => {
            console.log(resp.data)
            setArticle(resp.data)

        }).catch(error => console.log(error))
    }, [id])
    return (
        <div>
            {/* {articles.map(article => (
            <h3 key={articles.id}>{article.title}</h3>))} */}
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <h3>{article.title}</h3>

        </div>
    )
}

export default FetchData