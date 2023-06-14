import React, { useState, useEffect } from 'react'

export default function CounterHook() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("This is a text")
    const [info, setInfo] = useState({ name: "", email: "" })
    const [articles, setArticles] = useState(['Article one', 'Article Two', 'Article Three'])

    const addAticle = () => {
        setArticles([...articles, 'New Article'])

    }
    // useEffect(() => {
    //     console.log("use effect")
    // }, [count, text])
    useEffect(() => {
        document.title = `You have clicked ${count} times`
    })
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Click Me</button>
            <h2>{text}</h2>
            <button onClick={() => setText("setTest")} className='btn btn-success'>Change Text</button>
            <br />
            <br />

            <input type='text' className='form-control' value={info.name}
                onChange={e => setInfo({ ...info, name: e.target.value })}
            />
            <input type='text' className='form-control' value={info.email}
                onChange={e => setInfo({ ...info, email: e.target.value })}
            />
            <h2> Name is: {info.name}</h2>
            <h2> Email is: {info.email}</h2>
            <br />
            <br />
            {
                articles.map(article => {
                    return <h2 key={article}>{article}</h2>
                })
            }
            <button onClick={addAticle} className='btn btn-primary'>Add Article</button>
            <button onClick={() => setCount(count + 1)} className='btn btn-primary'>Change title</button>
        </div>
    )
}
