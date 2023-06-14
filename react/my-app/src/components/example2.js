import React, { Component } from 'react'

function myElement(names) {
    return names.map(name => <div key={name}>{

        `${name}`
    }</div>)
}


export class example2 extends Component {
    render() {
        return (
            <h3>{myElement(this.props.names)}</h3>
        )
    }
}

export default example2