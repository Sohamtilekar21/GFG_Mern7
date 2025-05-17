import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'




function App() {

  return (
    <>
      <h1>This is my homepage</h1>
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About us</Link>
        <Link to="Contact">Contact Us</Link>
        <Link to="Feedback">Feedback</Link>
      </nav>

      <Routes>
        
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
      </Routes>
    </>
  )
}

export default App
