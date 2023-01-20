import React from "react";
import Displayrobot from "./Displayrobot";


function BotCollection({robots, armies, setArmies}){
    const robotsToDisplay = robots.map((robot)=>{
        return  (
            <Displayrobot  armies={armies} setArmies={setArmies} key={robot.id} robot={robot} container="collection-container" />
        )
    })
    
   return (
    <div className="robs">
        {robotsToDisplay}
   </div>
   )
}
export default BotCollection;