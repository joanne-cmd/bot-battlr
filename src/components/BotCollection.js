import React,{useState} from "react";
import Displayrobot from "./Displayrobot";
import Sort from "./Sort";

function BotCollection({robots, armies, setArmies, setView , setBottodisplay}){
    const [sort,setSort]=useState("health")
     const[arrange,setArrange]=useState("ascending")
     const[bot_class, setBotClass]= useState("All")
     const filteredbots= robots.filter((robot)=>{
        if (bot_class=== "All"){
            return true
        }
        return robot.bot_class === bot_class
     })
     const sortedBots= [...filteredbots].sort((previous,next)=>{
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
            <Sort sort={sort} setSort={setSort} arrange={arrange} setArrange={setArrange} setBotClass={setBotClass} bot_class={bot_class} />
             <div className="robs">

                {robotsToDisplay}

            </div>
        </>
   )
}
export default BotCollection;