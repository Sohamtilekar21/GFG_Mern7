import "./App.css"
import Counter from "./assets/counter"
import Greet from "./assets/Greet"

function App(){
  const course = "Mern full stack"
  const isLoggedIn = false
  return(
    <>
    <h1 className="hh">I am learing {course}</h1>
    <h3>I am h3 heading</h3>
    <h5>I am small heading</h5>
    {isLoggedIn ? <h1>Welcome to wepage </h1> : <h2>Plese login</h2> }
    <Greet name="Mario" />
    <Counter />
    </>

  )

}

export default App