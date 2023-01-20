import React from "react";
import Displayrobot from "./Displayrobot";
function YourBotArmy({armies,setArmies,handleDelete }){
    const addarmy=armies.map((marmy) => { 
        return <Displayrobot key={marmy.id}  armies={armies} setArmies={setArmies}  handleDel={handleDelete} robot={marmy} container="army-container"/>
    })
    return (
        <div className="bots">
            { addarmy}
        </div>
    )
}
export default YourBotArmy;