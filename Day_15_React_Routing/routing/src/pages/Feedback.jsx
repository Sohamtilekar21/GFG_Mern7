import React from 'react'
import { useState } from 'react'
import '../App.css'


export default function Feedback() {
    let arr =[]
    const[user,setUser] = useState({
        name:"",
        email:"",
        num:""
    })
    const myData = (e) =>{
        e.preventDefault()
        alert(`your username is ${user.name}`)
        console.log(user.name)
        console.log(user.email)
        console.log(user.num)
        setUser({
           ...user,name:"",email:"",num:''
        })
    }

    

  return (
    <div className='feedback'>
        This is Feedback form
        <div className="myform">
            <form onSubmit={myData}>
                <input type="text" placeholder='your name' value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
                <input type="email" placeholder='abc@123.com' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                <input type="number" placeholder='number' value={user.num} onChange={(e)=>setUser({...user,num:e.target.value})}/>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
        <h4>The users are</h4>
        {/* {user.map((u,index)=>(
            <li key={index}>{u}</li>
        ))} */}
    </div>
  )
}
