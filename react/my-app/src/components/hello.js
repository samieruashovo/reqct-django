import React from 'react';

function Hello(props) {
    function clickMe() {
        alert('button is clicked');
    }
    return (<div className='container'>
        <h1>{props.name}</h1>
        <button className="btn btn-success" onClick={clickMe}>Click me</button>
    </div>
    );
}
export default Hello;