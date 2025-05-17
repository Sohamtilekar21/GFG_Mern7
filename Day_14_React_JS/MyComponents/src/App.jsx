import './App.css'
import Cards from './Cards'
import vk from "./assets/vk.jpg"
import rs from "./assets/rs.jpg"
import jb from "./assets/jb.jpg"
import rp from "./assets/rp.jpg"
import hp from "./assets/hp.jpg"

function App() {


  return (
    <>
      <h1>I am making components</h1>

      <Cards id="a" pic={vk} title="Virat Kohli" team="(RCB)" plays="Batsman"/>
      <Cards pic={rs} title="Rohit Sharma" team="(MI)" plays="Batsman"/>
      <Cards pic={jb} title="Jasprit Bumrah" team="(MI)" plays="Bowler"/>
      <Cards pic={rp} title="Rishab Pant" team="(LSG)" plays="Wicket Keeper"/>
      <Cards pic={hp} title="Hardik Pandya" team="(MI)" plays="All Rounder"/>
    </>
  )
}

export default App
