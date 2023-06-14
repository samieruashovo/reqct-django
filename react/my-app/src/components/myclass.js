import React, { Component} from 'react';

class MyClass extends Component {


    render() {
        return (
            <div>
                <h1 className='bg-primary text-white text-center'>{this.props.email}</h1>
                <button className="btn btn-primary" onClick={this.props.myclick}>Click</button>
            </div>
        );
    }
    //you don't need props parameter to access props in class component

}

export default MyClass;