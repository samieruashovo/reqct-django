import React from 'react'

function myElement(names) {
    return names.map(name => <div key={name}>{

        `${name}`
    }</div>)
}

function example(props) {
    return (
        <div><h3>{myElement(props.names)}</h3></div>
    )
}

export default example