import React from "react";
import Displayrobot from "./Displayrobot";



function BotCollection({robots, armies, setArmies, setView , setBottodisplay}){
    const robotsToDisplay = robots.map((robot)=>{
        return  (
            <Displayrobot   setView={setView} armies={armies} setArmies={setArmies} key={robot.id} robot={robot} container="collection-container" setBottodisplay={setBottodisplay}/>
        )
    })
    
   return (
    <div className="robs">
        {robotsToDisplay}
   </div>
   )
}
export default BotCollection;