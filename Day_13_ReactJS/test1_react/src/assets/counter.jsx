import {useState} from 'react'
function Counter(){
    const [Count,setCount]=useState(0)
    function add(){
        setCount(Count+1)
    }
    function subt(){
        setCount(Count-1)
    }
    return(
        <>
        <h2>I am Learning Use states</h2>
        <h1>the counter value is {Count}</h1>
        <button onClick={add}>+</button>
        <button onClick={subt}>-</button>
        </>
    )
}

export default Counter