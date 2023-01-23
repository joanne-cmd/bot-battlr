import React from "react";
function Filter({bot_class, setBotClass}){
    return(
      <div className='searchbar'>
        <select onChange={(e)=>{
          setBotClass(e.target.value)
        }}>
            <option>All</option>
            <option>Defender</option>
            <option>Medic</option>
            <option>Support</option> 
            <option>Witch</option>
            <option>Assault</option>
            <option>Captain</option>
            
        </select>
      </div>
    )
  }
  export default Filter;