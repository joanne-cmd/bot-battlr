 import React from "react";
 function BotSpecs ({bot ,armies, setArmies, setView}){
    const{name, health, damage, armor, bot_class, avatar_url, catchphrase, created_at, updated_at}=bot
    function handleGoBack(){
        setView("collection")

    }
    function handleEnlist(){
        if(!armies.find(rob => rob.id === bot.id)) {
                setArmies([...armies, bot])
                setView("collection")
            }
    }
    return(
        <div className="robots" > 
            <img src={avatar_url} alt={name}/>
            <h1>{name}</h1>
            <div className="catch"> {catchphrase}</div>
            <h4>bot_class:{bot_class}</h4>
            <p> created at:{created_at} </p>
            <p>updated_at:{updated_at}</p>

            <div className="icons">
                <span>{"💜"+health}</span>
                <span>{"⚡"+damage}</span>
                <span>{"🛡"+armor }</span>
            </div>
            {/* add a button in the yourbotfunction */}
         <button onClick={handleEnlist} className="del" >Enlist</button>
         <button onClick={handleGoBack} className="del" >go back</button>

        </div>
    )
 }
 export default BotSpecs