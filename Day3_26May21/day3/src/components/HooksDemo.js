
import React, { useState } from 'react'

const Hookdemo =(props) =>{

    const [count,setCount] =useState(props.count) //arry dest

 
return (
        <div>
            <p> the current count is {count}</p>
            <button onClick={() =>setCount(count+1)}>increment</button>
            <button onClick={() =>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Hookdemo

Hookdemo.defaultProps={
    count:2
}