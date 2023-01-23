import React from "react";
import Displayrobot from "./Displayrobot";
function YourBotArmy({armies,setArmies,handleDelete, setRobots, robots }){
    const addarmy=armies.map((marmy, index) => { 
        return <Displayrobot key={index}  armies={armies} setArmies={setArmies}  handleDel={handleDelete} robot={marmy} container="army-container" robots={robots} setRobots={setRobots}/>
    })
    return (
        <div className="bots">
            { addarmy}
        </div>
    )
}
export default YourBotArmy;