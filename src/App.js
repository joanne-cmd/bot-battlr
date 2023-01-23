import './App.css';
import React,{useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
function App() {
  const [robots, setRobots]= useState([])
  const [armies, setArmies]=useState([])
  const [view, setView]=useState("collection")
  const[bottodisplay, setBottodisplay]= useState({})
  function deleteHelper(robotid){
    const remove= robots.filter((rob)=>{ 
         return  rob.id !== robotid
    })
    setRobots(remove)
  return(
    {remove}
  )

  
  }
  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then(res=>res.json())
    .then(data=>setRobots(data))
  },[])
  return (
    <div className="App">
      <YourBotArmy handleDelete={deleteHelper} armies={armies} setArmies={setArmies}/>
      {view==="collection"?<BotCollection armies={armies}  setArmies={setArmies} robots={robots} setRobots={setRobots} setView={setView} setBottodisplay={setBottodisplay}/>:<BotSpecs bot={bottodisplay} armies={armies} setArmies={setArmies} setView={setView}/>}
      
    </div>
  );
}

export default App;
