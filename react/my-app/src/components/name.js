import React, { Component } from 'react';

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "shovo sarker"
        }
    }
    clickedMe = () => {
        this.setState({
            //name: 'changeed Text'
            name: this.state.name === "shovo sarker" ? "samier" : "shovo sarker"
        })
    }
    render() {
        return (
            <div>
                <h1 className='bg-primary text-white text-center'> {this.state.name}</h1>
                <button onClick={this.clickedMe} className='btn btn-success'>change text</button>
            </div>
        )
    }
}
export default Name;