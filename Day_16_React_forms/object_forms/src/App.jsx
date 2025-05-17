import { useState } from 'react'
import './App.css'

function App() {
  const [user,setUser] = useState({
    name:"",
    email:""
  })
  const [list,setList] = useState([])

  const myData = (e) =>{
    e.preventDefault()
    setList([...list,`${user.name} , ${user.email}`])
    setUser({
      name:"",
      email:""
    })
    console.log(list)
  }
  return (
    <>
    <div>
      Form
      <form onSubmit={myData}>
        <input type="text" placeholder='your name' value={user.name} onChange={(e)=>{setUser({...user,name:e.target.value})}}/>
        <br />
        <input type="email" placeholder='abc@gmail.com' value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
        <br />

        <button>Submit</button>
      </form>
      <h2>
        The names are :
      </h2>
      <ol>
        {
          list.map((u,index)=>(
            // <li key={index}>{u[1]}</li>
            <li key={index}>{u}</li>
          ))
        }
      </ol>
    </div>
    </>
  )
}

export default App
