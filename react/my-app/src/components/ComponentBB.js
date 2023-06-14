import React, { useContext } from 'react'
import { MyContext2 } from '../App'

function ComponentBB() {
    const data = useContext(MyContext2)
    return (
        <div>
            {data}
        </div>
    )
}

export default ComponentBB