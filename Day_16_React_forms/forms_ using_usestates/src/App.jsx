import { useState } from 'react'
import './App.css'

function App() {
  const [name,setname] = useState("")
  const [email,setEmail] = useState("")
  const [list,setList] = useState([])


  const myData = (e) =>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    setList([...list,{name,email}])
    console.log(list)
    setname("")
    setEmail("")
  }
  return (
    <>
    <div>
      Form
      <form onSubmit={myData}>
        <input type="text" placeholder='your name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <br />
        <input type="email" placeholder='abc@gmail.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />

        <button>Submit</button>
      </form>
      <h2>
        The names are :
      </h2>
      <ol>
        {
          list.map((user,index)=>(
            <li key={index}>{user.name} , {user.email}</li>
          ))
        }
      </ol>
    </div>
    </>
  )
}

export default App
