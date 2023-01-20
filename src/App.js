import './App.css';
import React,{useState, useEffect} from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
function App() {
  const [robots, setRobots]= useState([])
  const [armies, setArmies]=useState([])
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
      <BotCollection armies={armies}  setArmies={setArmies} robots={robots} setRobots={setRobots}/>
    </div>
  );
}

export default App;
