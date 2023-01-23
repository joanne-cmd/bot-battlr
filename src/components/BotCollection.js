import React,{useState} from "react";
import Displayrobot from "./Displayrobot";
import Sort from "./Sort";

function BotCollection({robots, armies, setArmies, setView , setBottodisplay}){
    const [sort,setSort]=useState("health")
     const[arrange,setArrange]=useState("ascending")
     const sortedBots= [...robots].sort((previous,next)=>{
        if (previous[sort]>next[sort]){
          return (arrange=== "ascending") ? 1:-1
        } else if(previous[sort]<next[sort]){
          return (arrange=== "ascending") ? -1:1 
        } else {
          return 0
        }
       })
    const robotsToDisplay =sortedBots.map((robot)=>{
        return  (
            <Displayrobot   setView={setView} armies={armies} setArmies={setArmies} key={robot.id} robot={robot} container="collection-container" setBottodisplay={setBottodisplay}/>
        )
    })
    
   return (
        <>
            <Sort sort={sort} setSort={setSort} arrange={arrange} setArrange={setArrange}/>
             <div className="robs">

                {robotsToDisplay}

            </div>
        </>
   )
}
export default BotCollection;