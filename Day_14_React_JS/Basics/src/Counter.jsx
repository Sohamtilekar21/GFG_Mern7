import React from 'react'
import { useState,useEffect } from 'react'

export default function Counter() {
  const [count,setCount]=useState(0)
    function add(){
      setCount(count+1)
    }
  
    const sub = ()=>{
      setCount(count-1)
    }
    
  useEffect(()=>{
    console.log(`The counter value is ${count}`)
    document.title =(`The counter value is ${count}`)
  })

  return (
    <>
    <div class="abc">This is a simple counter
    <h3>The count value is {count}</h3>
    <button onClick={add}>+</button>
    <button onClick={sub}>-</button>
    </div>
    </>
  )
}
