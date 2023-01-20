import React from "react";
 function Displayrobot({robot, armies, setArmies, container,handleDel}){

    const {name, health, damage, armor, bot_class, catchphrase, avatar_url} = robot

    function handleclick(){

        // let robotInArmies = false;

        // for(let rob of armies) {
        //     if(rob.id === robot.id) {
        //         robotInArmies = true
        //     } 
        // }
        
        // if(robotInArmies === false) {
        //     setArmies([...armies, robot])
        // }
        if (container=== "collection-container"){
            if(!armies.find(rob => rob.id === robot.id)) {
                setArmies([...armies, robot])
            }
        }
        else{
            // console.log(armies, container)
           setArmies (armies.filter(rob=>rob.id !== robot.id))
        }
           
        //console.log(armies, container)
    }
    function handleDelete(){
        fetch(`http://localhost:3000/bots/${robot.id}`,{
            method:"DELETE"
        })
        handleDel(robot.id)


    }
    return (
        <div className="robots" onClick={handleclick}> 
            <img src={avatar_url} alt={name}/>
            <h1>{name}</h1>
            <div className="catch"> {catchphrase}</div>
            <div className="icons">
                <span>{"💜"+health}</span>
                <span>{"⚡"+damage}</span>
                <span>{"🛡"+armor }</span>
            </div>
            {/* add a button in the yourbotfunction */}
            {container==="army-container"? <button onClick={handleDelete} className="del" >x</button>: null}

        </div>
    )
 }
 export default Displayrobot;