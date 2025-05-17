import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list,setList] = useState([])
  const [editIndex,setEditIndex] = useState(null)

  function handleClick(){
    if(task.trim()===""){
      alert("Enter task")
      return
    }
    if(editIndex !==null){
      const updated=[...list]
      updated[editIndex]=task
      setList(updated)
      setEditIndex(null)
    }else{
      setList([...list,task])
    }
    // setList([...list,task])
    setTask("")
  }

  function deleteTask(index){
    const newList=list.filter((_,i)=>i!==index)
    setList(newList)
  }

  return (
    <>
    <h3>To Do App</h3>
        <input type="text" placeholder='Enter task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleClick}>
          {editIndex!==null ?'Update' : 'Add'}
        </button>
     
     <ol>
      {
        list.map((a,index)=>(
        <li key={index}>
          {a} 
          <button onClick={()=>{
            setTask(list[index])
            setEditIndex(index)
          }}>
            Edit</button> 
          <button onClick={()=> deleteTask(index)}>Delete</button>
        </li>))
      }
      
     </ol>
    </>
  )
}

export default App
